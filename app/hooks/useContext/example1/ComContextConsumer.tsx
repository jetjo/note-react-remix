import { useContext } from 'react'
import { Context1 } from './ComWithContext'

export function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Context1.Provider value={{ message: 'hello panel!' }}>
      <h1>{title}</h1>
      {children}
    </Context1.Provider>
  )
}

export function Button({ children }: { children: React.ReactNode }) {
  const theme = useContext(Context1)
  return <button onClick={() => console.log(theme.message)}>{children}</button>
}
