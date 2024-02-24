import RegisterForm from '@/components/RegisterForm'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
  return (
    <div className="lg:p-8">
      <div className="mx-auto my-36 flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below to create your account
          </p>
        </div>
        <RegisterForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link> {" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <p className='px-8 text-center text-sm text-muted-foreground'>
          <span>Have an account</span>
          <Link href="/login" className='px-1 underline'>Sign In</Link>
        </p>


      </div>
    </div>
  )
}
