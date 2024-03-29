'use client'

import React, { MouseEvent, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { IconBrandGithub, IconSpiral } from '@tabler/icons-react'
import { useRegister } from '@/hooks/useRegister'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {register, isLoading, error, success} = useRegister()
    const router = useRouter()

    const onLogin = async (e: MouseEvent<HTMLButtonElement>) => {        
        await register(name, email, password)
    }

    useEffect( () => {
        if (success) {
            router.push('/dashboard')
        }
    }, [success])

    return (
        <div className="grid gap-6">
            <form>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only">
                            Email
                        </Label>
                        <Input
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="grid gap-1">
                        <Label className="sr-only">
                            Name
                        </Label>
                        <Input
                            placeholder="John Doe"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            value={name}
                            disabled={isLoading}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>


                    <div className="grid gap-1">
                        <Label className="sr-only">
                            Password
                        </Label>
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            disabled={isLoading}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button disabled={isLoading} onClick={onLogin}>
                        {isLoading && (
                            <IconSpiral className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign Up with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <IconSpiral className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <IconBrandGithub className="mr-2 h-4 w-4" />
                )}{" "}
                GitHub
            </Button>
        </div>
    )
}
