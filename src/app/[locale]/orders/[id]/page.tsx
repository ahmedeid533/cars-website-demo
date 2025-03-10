import OrderDetails from '@/components/Orders/OrderDetails/OrderDetails'
import { Metadata } from 'next'

type props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
  return {
    title: `3RABITK | Order #${params.id}`,
    description: `Generated for 3RABITK Order #${params.id}`,
  }
}

const page = () => {
  return <OrderDetails />
}

export default page
