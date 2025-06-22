import { FormikHelpers } from 'formik'
import useFormLoading from './use-form-loading'
import { useRouter } from 'next/navigation'
import { makeNotification } from '@/util/makeNotification'
import displayErrorMessages from '@/util/displayErrorMessages'
import { initialValues } from '@/forms/login/initialValues'
import { useLocale } from 'next-intl'
import Cookies from 'universal-cookie'
import { login } from '@/action/auth/login'

const useLoginSubmit = () => {
  const cookie = new Cookies()
  const locale = useLocale()
  const router = useRouter()
  const { handleLoading } = useFormLoading()

  const handleLoginSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    handleLoading(true)
    setSubmitting(true)
    await login(values)
      .then(res => {
        console.log({ res })
        if (res?.message && res.message === 'Login successful') {
          makeNotification(
            'success',
            locale === 'en' ? res.message : 'تم تسجيل الدخول بنجاح'
          )
          cookie.set('token', res.token , {path: '/'})
					cookie.set('customer', res.customer, {path: '/'})
					window.location.href = `/${locale}`
        } else {
          displayErrorMessages(res?.errors as Record<string, string[]>)
        }
      })
      .catch(error => {
        if (error.errors) {
          displayErrorMessages(error?.errors as Record<string, string[]>)
        } else {
          makeNotification('error', error.message)
        }
      })
      .finally(() => {
        handleLoading(false)
        setSubmitting(false)
      })
  }

  return handleLoginSubmit
}

export default useLoginSubmit
