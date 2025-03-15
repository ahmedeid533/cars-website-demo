import { FormikHelpers } from 'formik';
import useFormLoading from './use-form-loading';
import { useRouter } from 'next/navigation';
import { makeNotification } from '@/util/makeNotification';
import displayErrorMessages from '@/util/displayErrorMessages';
import { initialValues } from '@/forms/signup/initialValues';
import { register } from '@/action/auth/register';
import { useLocale } from 'next-intl';
import Cookies from "universal-cookie";
import { cookies } from 'next/headers';

const useRegisterSubmit = () => {
    const cookie = new Cookies()
    const locale = useLocale()
    const router = useRouter()
    const { handleLoading } = useFormLoading();
    const handleRegisterSubmit = async (
        values: typeof initialValues,
        { setSubmitting }: FormikHelpers<typeof initialValues>
    ) => {
        handleLoading(true);
        setSubmitting(true);
        console.log({values})
        await register(values)
            .then((res) => {
                console.log({res})
                if (res?.message && res.message === "Registration successful") {
                    makeNotification("success", locale === "en"?res.message:"تم انشاء الحساب بنجاح");
                    cookie.set("token", res.token)
                    cookie.set("customer", res.customer)
                    router.push(`/${locale}`)
                } else {
                    displayErrorMessages(res?.errors as Record<string, string[]>)
                }
            }).catch(error => {
                if (error.errors) {
                    displayErrorMessages(error?.errors as Record<string, string[]>)
                } else {
                    makeNotification('error', error.message)
                }
            }).finally(() => {
                handleLoading(false);
                setSubmitting(false);
            })
    };

    return handleRegisterSubmit
}

export default useRegisterSubmit