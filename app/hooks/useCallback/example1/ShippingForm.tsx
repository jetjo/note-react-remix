import { memo } from 'react'
import type { Prop } from './ProductPage'

const ShippingForm = memo(function ({ onSubmit }: Prop['ShippingForm']) {
  console.log('ShippingForm rendered', { onSubmit })
  return <div>ShippingForm</div>
})

export default ShippingForm
