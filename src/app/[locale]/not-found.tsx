import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Auto Parts | 404 Not Found',
    description: 'Generated for Auto Parts',
}

const NotFoundPage = () => {
    return (
        <aside className="custom-container2 flex flex-col-reverse md:flex-col items-center justify-center py-10 gap-5">
            <div className="relative w-3/4 md:w-full  h-[60vh]">
                <Image src={'/not-found.svg'} alt="notfound" fill className="object-contain" />
            </div>
            <h2 className="text-center text-custom-black text-2xl md:text-5xl tracking-wide font-bold">
                This page will be <span className="text-custom-blue">launched</span> soon
            </h2>
        </aside>
    )
}

export default NotFoundPage
