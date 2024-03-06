import { useCallback, useEffect, useState } from 'react'

export default function ChatRoom() {
  const [roomId] = useState(0)
  const [testId, setTestId] = useState(0)

  const createOption = useCallback(() => {
    return { roomId }
  }, [roomId])
  
  useEffect(() => {
    const option = createOption()
    // const connect = createConnection(option)
    // connect.con();
    console.log('链接到了')
  }, [createOption])
  return <div onClick={() => setTestId(testId + 1)}>{testId}</div>
}
