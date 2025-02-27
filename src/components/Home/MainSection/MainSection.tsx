"use client"
import MainSectionSlider from './MainSectionSlider'
import MainSectionForm from '@/components/MainSectionForm/MainSectionForm';
import { Banner } from '@/types';

interface IMainSection {
    banners: Banner[]
}
const MainSection = ({banners}: IMainSection) => {
    return (
        <main className='relative flex flex-col gap-5 mb-10 lg:mb-52 w-full'>
            <MainSectionSlider banners={banners}/>
            <section className='bottom-0 lg:bottom-[-160px] lg:absolute relative flex justify-center items-center w-full h-full lg:h-auto'>
                <MainSectionForm setOpen={null} />
            </section>
        </main>
    )
}

export default MainSection