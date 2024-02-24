import React, { ReactNode } from 'react'

export default function PublicLayout({children}:{children: ReactNode}) {
  return (
    <div>
      <div>public pages</div>
      {children}
    </div>
  )
}
