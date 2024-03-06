import AddTask from "./AddTask";
import TaskProvider from "./TaskContext";
import TaskList from "./TaskList";

export default function Task() {
  return (
    <TaskProvider>
      <h2>Day off in Kyoto</h2>
      <AddTask />
      <TaskList />
    </TaskProvider>
  )
}
