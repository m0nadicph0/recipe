'use client'
import { Button } from '@/components/ui/button'
import { useLogout } from '@/hooks/useLogout'
import React, { MouseEvent, ReactNode } from 'react'

export default function ProtectedLayout({children}: {children: ReactNode}) {
  const {logout} = useLogout()

  function handleLogout(event: MouseEvent<HTMLButtonElement>) {
    logout()
  }

  return (
    <div>
       <nav>
          <h1>Recipes for Ninjas</h1>
          <Button onClick={handleLogout}>Log Out</Button>
        </nav>
      {children}
    </div>
  )
}
