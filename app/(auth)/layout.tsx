import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full bg-neutral-900 h-dvh flex justify-center items-center'>
      {children}
    </div>
  )
}

export default AuthLayout