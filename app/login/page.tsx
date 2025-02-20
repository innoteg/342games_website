'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button
        onClick={() => signIn('github', { callbackUrl: '/' })}
      >
        Sign in with GitHub
      </Button>
    </div>
  )
}
