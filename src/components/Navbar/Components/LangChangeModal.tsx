'use client'
import { Backdrop, Fade, Modal } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { generatePathname } from './generatePathname'

type props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const LangChangeModal = ({ open, setOpen }: props) => {
  const [displayLangSelection, setDisplayLangSelection] = useState(false)
  const t = useTranslations('Header')
  const [, startTransition] = React.useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [lang, setLang] = useState(locale)
  const handleDisplayLangSelection = (lang: string) => {
    setDisplayLangSelection(false)
    setLang(lang)
  }
  const handleClose = () => {
    setOpen(false)
    startTransition(() => {
      router.replace(
			`/${lang}/${generatePathname(document.location.href.split("/"))}`
		);
      console.log(
			"document.location.href ==> ",
			generatePathname(document.location.href.split("/")),
		);
    })
  }
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <div className='z-[100] border-none outline-none'>
          <div
            className='top-[50%] left-[50%] absolute flex flex-col gap-3 border-none outline-none w-[75%] md:w-[50%] h-[55vh] md:h-[46vh] lg:h-[65vh]'
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className='flex flex-col justify-start items-start gap-3 bg-white p-6 rounded'>
              <h2 className='font-bold text-xl'>{t('Display settings')}</h2>
              <p className='mb-1 font-light'>{t('Change your language')}</p>
              <div
                className='flex flex-row justify-between items-center px-3 py-2 border-[1px] border-custom-input-bg rounded-lg w-full cursor-pointer'
                onClick={() => setDisplayLangSelection(prev => !prev)}
              >
                <div>
                  <h4>{t('Language')}</h4>
                  <h3 className='font-semibold'>
                    {lang === 'en' ? 'English' : 'العربية'}
                  </h3>
                </div>
                <KeyboardArrowDownIcon />
              </div>
              <button
                className='bg-custom-blue hover:bg-custom-blue1-hover p-2 rounded-md w-full text-white transition duration-300'
                onClick={handleClose}
              >
                {t('Save')}
              </button>
            </div>
            {displayLangSelection && (
              <ul className='flex flex-col justify-start items-start bg-gray-100 border-none rounded outline-none overflow-hidden'>
                {['ar', 'en'].map((lang, index) => (
                  <li
                    key={index}
                    className='hover:bg-gray-200 px-6 py-3 w-full transition duration-300 cursor-pointer'
                    onClick={() => {
                      handleDisplayLangSelection(lang)
                    }}
                  >
                    {lang === 'ar' ? 'العربية' : 'English'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Fade>
    </Modal>
  )
}

export default LangChangeModal
