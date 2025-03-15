'use client'
import Image from 'next/image'
import VehicleSelectionBtn from './VehicleSelectionBtn'
import CustomDropDown from './CustomDropDown/CustomDropDown'
import { usePathname } from 'next/navigation'
import { checkIsNotAuthPages } from '../../../global/isNotAuthPages'
import LockIcon from '@mui/icons-material/Lock'
import Link from 'next/link'
import Cookies from 'universal-cookie'

const ThirdPart = () => {
  const path = usePathname()
  const isNotAuthPage = checkIsNotAuthPages(path)
  const cookie = new Cookies()
  const token = cookie.get('token')
  return (
    <>
      {isNotAuthPage ? (
        <div className='hidden md:flex flex-row items-center gap-5'>
          <VehicleSelectionBtn />
          <CustomDropDown
            link='profile'
            content={
              <Image
                src={'/userIcon.svg'}
                alt='user'
                width={45}
                height={45}
                className='object-contain cursor-pointer'
              />
            }
          />
          {
            token &&
          <CustomDropDown
            link='cart'
            content={
              <div className='relative cursor-pointer'>
                <Image
                  src={'/cartIcon.svg'}
                  alt={'car'}
                  width={45}
                  height={45}
                  className='object-contain cursor-pointer'
                />
                <span
                  className={`top-[-5px] right-[-4px] absolute bg-custom-green px-[5px] py-[0px] rounded-full w-[56%] h-[56%] text-white text-sm text-center`}
                >
                  {1}
                </span>
              </div>
            }
          />
          }
        </div>
      ) : (
        <Link
          href={'#'}
          className='flex flex-row items-center gap-5 font-bold text-custom-black capitalize'
        >
          <h4>secure {path.split('/')[1]}</h4>
          <LockIcon className='p-2 border border-black rounded-full w-[35px] h-[35px]' />
        </Link>
      )}
    </>
  )
}

export default ThirdPart
