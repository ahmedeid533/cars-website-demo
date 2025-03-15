import { profileLinks } from '@/mocks/profileLinks'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import Cookies from 'universal-cookie'
import { logout } from '@/action/auth/logout'
import { makeNotification } from '@/util/makeNotification'

const Profile = () => {
  const t = useTranslations('Header')
  const locale = useLocale()
  const cookie = new Cookies()
  const token = cookie.get('token')
  const handleLogout = async () => {
    await logout(token)
      .then(res => {
        if (res && res.message) {
          makeNotification('success', res?.message)
        }
      })
      .catch(err => {
        makeNotification('error', err?.message)
      })
      .finally(() => {
        cookie.remove('token')
        cookie.remove('customer')
        window.location.href = '/'
      })
  }
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
        {token && (
          <h3 className='font-bold text-custom-black'>{t('My Account')}</h3>
        )}
        {!token && (
          <div className='flex flex-col items-center gap-4 text-center'>
            <Link
              href={'/login'}
              className='bg-custom-blue py-3 rounded w-full text-white'
            >
              {t('Sign in')}
            </Link>
            <p className='flex flex-row items-center gap-2'>
              <span className='text-custom-gray'>{t('New Customer?')}</span>
              <Link href={'/signin'} className='text-custom-blue'>
                {t('Sign Up')}
              </Link>
            </p>
          </div>
        )}
      </div>
      {token && (
        <div className='flex flex-col gap-4'>
          {profileLinks.map((profileLink, index) => (
            <Link
              key={index}
              href={profileLink.path}
              className='flex flex-row justify-between items-center pb-3 border-b border-b-[#525252] w-full'
            >
              <div className='flex flex-row items-center gap-3'>
                <Image
                  src={profileLink.icon}
                  alt={t(profileLink.title)}
                  width={20}
                  height={20}
                />
                <h4 className='text-custom-black capitalize'>
                  {t(profileLink.title)}
                </h4>
              </div>
              <ArrowRightAltIcon
                className='text-[#525252]'
                style={
                  locale === 'ar'
                    ? { transform: 'rotate(180deg)' }
                    : { transform: 'none' }
                }
              />
            </Link>
          ))}
          <button
            className='flex flex-row justify-between items-center pb-3 border-b border-b-[#525252] w-full'
            onClick={handleLogout}
          >
            <div className='flex flex-row items-center gap-3'>
              <h4 className='text-red-700 capitalize'>{'Logout'}</h4>
            </div>
            <ArrowRightAltIcon
              className='text-red-700'
              style={
                locale === 'ar'
                  ? { transform: 'rotate(180deg)' }
                  : { transform: 'none' }
              }
            />
          </button>
        </div>
      )}
    </div>
  )
}

export default Profile
