import { useCallback, useState } from 'react'
import ShippingForm from './ShippingForm'

interface Prop {
  ShippingForm: { onSubmit: (orderDetails: any) => void }
}

const post = (...args: any[]) => {}
export default function ProductPage() {
  const [productId] = useState(0)
  const [testId, setTestId] = useState(0)

  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post(`/product/${productId}/buy`, { orderDetails })
    },
    [productId]
  )

  return (
    <div data-test-id={testId} onClick={() => setTestId(testId + 1)}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

export type { Prop }
