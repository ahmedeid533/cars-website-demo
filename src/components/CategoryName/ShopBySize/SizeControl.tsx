import { Divider } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SortServices from './SortServices'

const SizeControl = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col gap-6 w-full'>
            <div className='flex items-center w-full justify-between'>
                <h3 className='text-custom-black text-lg'>{title}</h3>
                <div className='flex items-center gap-3 text-center'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-lg'>225</span>
                        <Divider className='w-full bg-custom-black' />
                        <span className='text-sm'>Width</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-lg'>45R</span>
                        <Divider className='w-full bg-custom-black' />
                        <span className='text-sm'>Raito</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-lg'>17</span>
                        <Divider className='w-full bg-custom-black' />
                        <span className='text-sm'>Diameter</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-3 items-center gap-2'>
                    <SortServices label={'width'} />
                    <SortServices label={'Radio'} />
                    <SortServices label={'Diameter'} />
                </div>
                <div className='flex items-center gap-2 text-custom-blue cursor-pointer'>
                    <ControlPointIcon />
                    <span>Add a Different Rear Tire Size</span>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button className='w-3/4 rounded text-white bg-custom-blue py-4'>
                        Go
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SizeControl
