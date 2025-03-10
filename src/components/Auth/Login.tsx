'use client'
import React from 'react'
import Link from 'next/link'
import CustomInput from './CustomInput'
import CustomPasswordInput from './CustomPasswordInput'
import useFormLoading from '@/hooks/use-form-loading'
import { Field, Form, Formik } from 'formik'
import Spinner from '../ui/Spinner'
import { validationSchema } from '@/forms/login/schema'
import { initialValues } from '@/forms/login/initialValues'
import useLoginSubmit from '@/hooks/use-login-submit'

const Login = () => {
  const { isLoading } = useFormLoading()
  const handleLoginSubmit = useLoginSubmit()
  return (
    <>
      <h2 className='font-bold text-cente text-custom-black text-6xl uppercase'>
        welcome
      </h2>
      <div className='flex flex-col gap-5 px-10 py-5 border md:border-custom-black border-transparent rounded w-full'>
        <div className='flex justify-center items-center w-full text-center'>
          <h5 className='w-full md:w-1/4 font-bold text-[#111] text-xl uppercase'>
            Let{"'"}s get started!
          </h5>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLoginSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col gap-4 w-full'>
              <h6 className='font-bold text-[#111] text-sm capitalize'>
                please login
              </h6>
              <Field
                key={'email'}
                name={'email'}
                component={CustomInput}
                label={'Please enter your email *'}
                type={'email'}
                placeholder={'example@gmail.com'}
              />

              <div className='flex flex-col gap-1'>
                <Field
                  key={'password'}
                  name={'password'}
                  component={CustomPasswordInput}
                  label={'Please enter your password *'}
                  type={'password'}
                  placeholder={'**********'}
                />
                <h6 className='flex flex-row justify-end items-center w-full'>
                  <Link href={'#'} className='text-custom-blue'>
                    Forgot your password?
                  </Link>
                </h6>
              </div>
              <button
                disabled={isLoading || isSubmitting}
                className='bg-custom-blue my-3 py-3 rounded w-full text-white'
                type='submit'
              >
                {isLoading || isSubmitting ? (
                  <Spinner />
                ) : (
                  <span className='w-full text-center'>
                    Log in using our secure server
                  </span>
                )}
              </button>
              <p className='text-center'>
                <span className='text-[#111] text-sm'>
                  Don{"'"}t have an account? 
                </span>
                <Link href={'/signin'} className='text-custom-blue'>
                  Signin
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Login
