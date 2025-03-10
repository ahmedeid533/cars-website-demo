'use client'
import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik'
import Link from 'next/link'
import { Divider, Button } from '@mui/material'
import SocialMediaBtns from './SocialMediaBtns'
import { formFields } from './signinFormFields'
import { initialValues } from '@/forms/signup/initialValues'
import { validationSchema } from '@/forms/signup/schema'
import useFormLoading from '@/hooks/use-form-loading'
import useRegisterSubmit from '@/hooks/use-register-submit'
import Spinner from '../ui/Spinner'

export default function SignupForm () {
  const { isLoading } = useFormLoading()
  const handleRegisterSubmit = useRegisterSubmit()

  return (
    <Fragment>
      <h2 className='font-bold text-custom-black text-2xl text-center uppercase'>
        Account Signup
      </h2>
      <div className='flex flex-col gap-5 mt-5 w-full'>
        <h5 className='font-bold text-[#111] uppercase'>
          Set User E-mail Address & Password
        </h5>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegisterSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col gap-4 w-full'>
              {formFields.map(
                ({
                  name,
                  component: Component,
                  label,
                  type,
                  placeholder,
                  isDatePicker
                }) =>
                  isDatePicker ? (
                    <Component key={name} name={name} label={label} />
                  ) : (
                    <Field
                      key={name}
                      name={name}
                      component={Component}
                      label={label}
                      type={type}
                      placeholder={placeholder}
                    />
                  )
              )}

              <Button
                type='submit'
                variant='contained'
                color='primary'
                className='bg-custom-blue my-3 py-3 rounded w-full text-white uppercase'
                disabled={isLoading || isSubmitting}
              >
                {isLoading || isSubmitting ? (
                  <Spinner />
                ) : (
                  <span className='w-full text-center'>
                    Create Your Account
                  </span>
                )}
              </Button>

              <Divider />
              <p className='text-gray-500 text-center'>
                Or use one of these options
              </p>
              <SocialMediaBtns />
              <p className='text-center'>
                <span className='text-[#111] text-sm'>
                  Already have an account?{' '}
                </span>
                <Link href='/login' className='text-custom-blue'>
                  Login
                </Link>
              </p>
              <p className='text-sm text-center'>
                <span className='text-[#111]'>
                  By creating an account, you agree to our{' '}
                </span>
                <Link href='#' className='text-custom-blue'>
                  Privacy Policy and Terms of Use
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  )
}
