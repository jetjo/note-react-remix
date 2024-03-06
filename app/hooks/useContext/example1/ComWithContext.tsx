import { createContext } from 'react'
import { Button, Panel } from './ComContextConsumer'

interface IContext1 {
  message: string
}

const defaultValue: IContext1 = { message: 'hello world!' }

export const Context1 = createContext(defaultValue)

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

export default function ComWithContext() {
  return (
    <Context1.Provider value={defaultValue}>
      <Form />
    </Context1.Provider>
  )
}

export type { IContext1 }
