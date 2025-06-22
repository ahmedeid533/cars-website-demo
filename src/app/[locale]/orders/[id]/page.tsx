import OrderDetails from '@/components/Orders/OrderDetails/OrderDetails'
import { Metadata } from 'next'

type props = {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `3RABITK | Order #${resolvedParams.id}`,
    description: `Generated for 3RABITK Order #${resolvedParams.id}`,
  }
}

const page = () => {
  return <OrderDetails />
}

export default page
