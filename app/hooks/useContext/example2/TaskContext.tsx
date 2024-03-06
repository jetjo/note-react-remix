import { Dispatch, createContext, useContext, useReducer } from 'react'

interface ITaskContext {
  id: number
  text: string
  done?: boolean
}

interface ITaskContextAction extends Partial<ITaskContext> {
  type: 'added' | 'changed' | 'deleted'
  task?: ITaskContext
}

function tasksReducer(tasks: ITaskContext[], action: ITaskContextAction) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    }
    case 'changed': {
      return tasks.map(t => {
        if (action.task && t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const initialTasks: ITaskContext[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
]

const TaskContext = createContext(initialTasks)
const TaskDispatchContext = createContext(null as unknown as Dispatch<ITaskContextAction>)

export default function TaskProvider({ children }: { children: React.ReactNode }) {
  const [task, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TaskContext.Provider value={task}>
      <TaskDispatchContext.Provider value={dispatch}>{children}</TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext)
}
