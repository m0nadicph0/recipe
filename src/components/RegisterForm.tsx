'use client'

import React, { MouseEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { cn } from '@/lib/utils'
import { IconBrandGithub, IconSpiral } from '@tabler/icons-react'

export default function RegisterForm() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const onLogin = async (e: MouseEvent<HTMLButtonElement>) => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
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
                            disabled={isLoading}
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
