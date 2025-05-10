import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout/Layout'
import NextTopLoader from 'nextjs-toploader'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { Flip, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: '3ARBITK',
  description: 'Generated for 3ARBITK, auto space parts'
}

export default async function LocaleLayout ({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    notFound();
  }
  return (
    <html lang='en'>
      <head>
        {/* <meta name='viewport' content='width=device-width, initial-scale=1.0' /> */}
        <link rel='icon' href='/main-logo-2.png' />
      </head>
      <body lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader
            color='#2F80ED'
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing='ease'
            speed={200}
            shadow='0 0 10px #2299DD,0 0 5px #2299DD'
          />
          <Layout>{children}</Layout>
          <ToastContainer
                position="bottom-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
                style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                }}
            />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
