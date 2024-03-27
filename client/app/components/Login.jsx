"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[450px] gap-6">
        <div className="grid gap-2">
          <h1 className="text-5xl  font-heading">Sign in</h1>
          <p className="text-balance text-muted-foreground">
            Enter your details below to log into your account
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex gap-2 w-full">
            <div className="grid gap-2 flex-1">
              <Label htmlFor="username" className="text-base">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                required
                className="focus:outline-none focus:ring-0 py-6"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="focus:outline-none focus:ring-0 py-6"
            />
          </div>
          <Button
            type="submit"
            className="w-full text-lg bg-theme font-heading py-6"
          >
            Let's go
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/auth?s=register" className="underline text-tertiary">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
