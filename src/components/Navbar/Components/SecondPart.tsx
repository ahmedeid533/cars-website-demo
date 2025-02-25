"use client"
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { checkIsNotAuthPages } from '../../../global/isNotAuthPages';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const SecondPart = () => {
  const path = usePathname()
  const isNotAuthPage = checkIsNotAuthPages(path)
  const t = useTranslations('Header')
  return (
    <>
      {
        isNotAuthPage &&
        <div className='flex flex-row flex-1 justify-between items-center gap-5 bg-transparent px-2 py-1 border-[#929292] border-[1px] rounded-md'>
          <InputBase
            placeholder={t('search by make model Year , Product Type , Part Number , or Brand')}
            inputProps={{ 'aria-label': 'search' }}
            className='w-full text-[#5C5C5C] placeholder:text-[#5C5C5C] placeholder:text-xs'
          />
          <SearchIcon className='text-black cursor-pointer' />
        </div>
      }
    </>
  )
}

export default SecondPart