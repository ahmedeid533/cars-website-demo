import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const Details = () => {
    return (
        <div className='col-span-1 px-10 lg:px-0 lg:col-span-2 flex flex-col gap-16 gap-x-0 justify-center'>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default Details
