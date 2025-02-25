import Link from 'next/link'
import Profile from './Profile'
import Cart from './Cart'
import { useLocale } from 'next-intl'

const CustomDropDown = ({
  link,
  content
}: {
  link: string
  content: JSX.Element
}) => {
  const locale = useLocale()
  return (
    <div className='group inline-block relative'>
      <Link href={`/${link}`}>{content}</Link>
      <div
        className={`hidden min-h-[15vh] items-end justify-end absolute ${
          locale === 'en' ? 'right-0' : 'left-0'
        } ${
          link === 'profile' ? 'min-w-[400px]' : 'min-w-[500px]'
        } z-[1] group-hover:flex`}
      >
        <div
          className={`hidden rounded absolute shadow-2xl ${
            locale === 'en' ? 'right-0' : 'left-0'
          } top-[50%] ${
            link === 'profile' ? 'min-w-[400px]' : 'min-w-[500px]'
          } z-[2] group-hover:flex flex-col px-5 py-10`}
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #D8D8D8 100%)'
          }}
        >
          {link === 'profile' && <Profile />}
          {link === 'cart' && <Cart />}
        </div>
      </div>
    </div>
  )
}

export default CustomDropDown
