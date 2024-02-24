import React, { ReactNode } from 'react'

export default function ProtectedLayout({children}: {children: ReactNode}) {
  return (
    <div>
       <nav>
          <h1>Recipes for Ninjas</h1>
        </nav>
      {children}
    </div>
  )
}
