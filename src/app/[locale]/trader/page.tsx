import Trader from '@/components/Trader/Trader'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '3RABITK | For traders',
    description: 'Generated for 3RABITK',
}
const page = () => {
    return (
        <Trader />
    )
}

export default page
