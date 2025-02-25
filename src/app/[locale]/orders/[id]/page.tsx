import OrderDetails from '@/components/Orders/OrderDetails/OrderDetails'
import { Metadata } from 'next'

type props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
  return {
    title: `Auto Parts | Order #${params.id}`,
    description: `Generated for Auto Parts Order #${params.id}`,
  }
}

const page = () => {
  return <OrderDetails />
}

export default page
