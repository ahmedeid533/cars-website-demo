import Trader from '@/components/Trader/Trader'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Auto Parts | For traders',
    description: 'Generated for Auto Parts',
}
const page = () => {
    return (
        <Trader />
    )
}

export default page
