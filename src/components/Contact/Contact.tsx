import Choosing from './Choosing'
import ContactDetails from './ContactDetails'
import ContactUserLinks from './ContactUserLinks'
import MainSection from './MainSection'
import Touch from './Touch'

const Contact = () => {
    return (
        <>
            <MainSection />
            <div className="custom-container1 flex flex-col lg:flex-row items-start gap-10 py-10">
                <Touch />
                <div className='flex flex-col gap-5'>
                    <ContactDetails />
                    {/* <ContactUserLinks /> */}
                </div>
            </div>
            <div className="custom-container1 py-10">
                <Choosing />
            </div>
        </>
    )
}

export default Contact
