import React from 'react'

const MainSection = () => {
    return (
        <div className="bg-[url('/contact/contact.jpg')] bg-cover bg-no-repeat bg-center w-full h-[50vh] relative">
            <div
                className="absolute top-0 w-full h-full flex flex-col text-white items-center justify-center bg-[#00000066]"
            >
                <h2 className='font-bold text-2xl lg:text-5xl tracking-widest'>Contact Us</h2>
                <p className='text-xs lg:text-sm w-3/4 lg:w-1/4 text-center'>You can now email us through our website and request anything you want now</p>
            </div>
        </div>
    )
}

export default MainSection
