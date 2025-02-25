"use client"

const Touch = () => {
    return (
        <section className='w-full lg:w-[60%] p-10'>
            <div className="flex flex-col gap-5">
                <h2 className='font-bold text-4xl text-custom-black'>
                    <span className='text-custom-blue'>Get In</span> Touch
                </h2>
                <p className='text-xs md:text-sm text-custom-black'>
                    Etiam pharetra egestas interdum blandit viverra morbi consequat mi non bibendum
                    egestas quam egestas nulla.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4 gap-y-4 lg:gap-y-8 w-full h-full">
                    <div className="flex flex-col p-3 rounded-lg border border-[#E9E9E9]">
                        <label htmlFor="firstName">First Name*</label>
                        <input type="text" id="firstName" placeholder="Ali" className="mt-1 p-2  rounded" />
                    </div>
                    <div className="flex flex-col p-3 rounded-lg border border-[#E9E9E9]">
                        <label htmlFor="lastName">Last Name*</label>
                        <input type="text" id="lastName" placeholder="Tufan" className="mt-1 p-2  rounded" />
                    </div>
                    <div className="flex flex-col p-3 rounded-lg border border-[#E9E9E9]">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" placeholder="example@gmail.com" className="mt-1 p-2  rounded" />
                    </div>
                    <div className="flex flex-col p-3 rounded-lg border border-[#E9E9E9]">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" placeholder="+90 123 456 789" className="mt-1 p-2 rounded" />
                    </div>
                    <textarea placeholder="message" className="h-[25vh] col-span-1 md:col-span-2 p-3 rounded-lg border border-[#E9E9E9]"></textarea>
                    <div className="w-full md:w-3/4 flex items-start mt-10 col-span-1 md:col-span-2">
                        <button className="rounded-md bg-custom-blue text-white py-4 px-8">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Touch
