import CategoryName from "@/components/CategoryName/CategoryName"
import { Metadata } from "next"

type props = {
    params: {
        category_name: string
    }
}

export async function generateMetadata({ params }: props): Promise<Metadata> {
    return {
        title: `Auto Parts | Category | ${params.category_name.toUpperCase()}`,
        description: `Generated for Auto Parts ${params.category_name.toUpperCase()} Category`,
    }
}

const page = () => <CategoryName />

export default page
