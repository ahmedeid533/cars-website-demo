import { Divider } from '@mui/material'
import Image from 'next/image'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

const Cart = () => {
  const t = useTranslations('Header')
  const locale = useLocale()
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='font-bold text-custom-black'>{t('Carts')}</h2>
      <div className='flex flex-col gap-8'>
        {[1, 2].map(index => (
          <div key={index} className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between items-start w-full'>
              <Image
                src={'/cart-item.png'}
                alt='cart'
                width={40}
                height={20}
                className='object-contain'
              />
              <p className='w-3/4 font-bold text-sm'>
                {
                  'RTX® - BLACK WIDOW Satin Black "("17" x 7.5"," +35 Offset, ...'
                }
              </p>
              <DeleteOutlineIcon className='cursor-pointer' />
            </div>
            <p className='flex flex-row justify-between items-center w-1/2'>
              <span>{t('Qty')}:</span>
              <span>4$161.09</span>
            </p>
          </div>
        ))}
      </div>
      <Divider />

      <div className='flex flex-col gap-8'>
        <p className='flex flex-col gap-1 text-custom-black text-sm'>
          <span>14 {t('items in your Cart')}   |   {t('Clear Cart')}</span>
          <span>{t('Subtotal')}: $1,567.27</span>
        </p>
        <div className='flex flex-row items-center gap-4 w-4/5'>
          <Link
            href={'/payment'}
            className='bg-custom-blue py-3 rounded w-full text-white text-center uppercase'
          >
            {t('Checkout Now')}
          </Link>
          <Link
            href={'/cart'}
            className='bg-custom-green py-3 rounded w-full text-white text-center uppercase'
          >
            {t('View Cart')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
