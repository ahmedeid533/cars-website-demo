import React from 'react'
import MainSection from './MainSection'
import AboutCard from './AboutCard'
import Stats from './Stats'
import Links from './Links'
import Image from 'next/image'
import Notes from './Notes'

const About = () => {
    return (
        <>
            <div className="custom-container2 py-10 flex flex-col gap-20">
                <MainSection />
                <AboutCard />
            </div>
            <Stats />
            {/* <Links /> */}
            <div className='relative w-full h-[30vh] md:h-[60vh]'>
                <Image src={'/about/about-bg.jpg'} alt='bg' fill className='object-cover' />
            </div>
            <Notes />
        </>
    )
}

export default About
