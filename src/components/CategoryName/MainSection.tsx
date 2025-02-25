import React from 'react'
import MainSectionForm from '../MainSectionForm/MainSectionForm'

const MainSection = () => {
    return (
        <>
            <section className="bg-[url('/category_name/main-bg.png')] bg-cover bg-no-repeat bg-center w-full h-[30vh] sm:h-[70vh] relative mb-5 lg:mb-52">
                <section className='hidden lg:flex absolute w-full bottom-[-160px] items-center justify-center'>
                    <MainSectionForm setOpen={null} />
                </section>
            </section>
            <section className='flex lg:hidden w-full items-center justify-center'>
                <MainSectionForm setOpen={null} />
            </section>
        </>
    )
}

export default MainSection
