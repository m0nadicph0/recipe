'use client'
import { Button } from '@/components/ui/button'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useLogout } from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'
import React, { MouseEvent, ReactNode, useEffect } from 'react'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const { logout } = useLogout()
  const { token, user } = useAuthContext()
  const router = useRouter()
  console.log("user at layout", user);


  function handleLogout(event: MouseEvent<HTMLButtonElement>) {
    logout()
  }

  useEffect(()=>{
    if(!user) {
      router.push('login')
    }
  }, [user])

  return (
    <div>
      <nav className='flex flex-row w-full'>
        <h1 className='grow'>Recipes for Ninjas</h1>
        {user && (
          <div className="flex flex-row gap-2">
            <span>{user.name}</span>
            <Button onClick={handleLogout}>Log Out</Button>
          </div>
        )}
      </nav>
      {children}
    </div>
  )
}
