import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
  return (
    <div className="lg:p-8">
      <div className="mx-auto my-36 flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
          Sign in to your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below to sign in to your account
          </p>
        </div>
        <LoginForm />
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
          <span>Don't have an account?</span>
          <Link href="/register" className='underline mx-1'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
