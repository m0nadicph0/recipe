'use client'

import React, { MouseEvent, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { cn } from '@/lib/utils'
import { IconBrandGithub, IconSpiral } from '@tabler/icons-react'
import { useLogin } from '@/hooks/useLogin'

export default function LoginForm() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {login, isLoading, error} = useLogin()

    const onLogin = async () => {
        await login(email, password)
    }

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
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
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading} onClick={onLogin}>
                        {isLoading && (
                            <IconSpiral className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
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
