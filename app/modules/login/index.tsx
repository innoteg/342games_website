'use client'
import React, { useState } from 'react';
import { fetchData } from '@/lib/utils/request';
import { IMAGE_URLS } from "@/lib/constants/urls";
import { AsyncButton } from '@/components/AsyncButton'
import Image from 'next/image';
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input"
import Label from "@/components/ui/label"
export default function LoginPage() {
  const [countdown, setCountdown] = React.useState<number | null>(null);
  const [email, setEmail] = useState<string>('');
  const [emailCode, setEmailCode] = useState<string>('');

  const sendEmailCode = async () => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email is valid
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return; // Exit the function if the email is invalid
    }

    const { code } = await fetchData('app/user/sendEmailCode' + '?email=' + email, {}, { method: 'GET' });
    
    if (code === 200) {
      startCountdown();
      toast.success('Verification code sent!');
    } else {
      toast.error('Failed to send verification code.');
    }
  }
  const emailLogin = async () => {
    const { code, data } = await fetchData('app/user/emailLogin' + '?email=' + email + '&code=' + emailCode, {},  { method: 'GET' })
    if (code === 200) {
      toast.success('Login successful!');
    } else {
      toast.error('Failed to login.');
    }
  }

  const startCountdown = () => {
    setCountdown(60);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return null;
        }
        return prev! - 1;
      });
    }, 1000);
  }

  return (
    <>
      <div className="w-full flex items-center justify-center h-full z-10 text-white">
        <div className='h-full p-[10px] sm:px-0 max-w-[300px] flex flex-col items-center gap-[10px] justify-center pb-[100px] w-full'>

          <div className='text-center text-base sm:text-2xl font-bold w-full  sm:mb-[30px]'>Create a free account</div>
          <div className='w-full'>
            <AsyncButton className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
              <Image className='w-[22px]' src={IMAGE_URLS.login.loginGoogle} width={21} height={21} alt=''></Image>
              <span className='font-bold text-xs'>Sign up with Google</span>
            </AsyncButton>
          </div>

          <div className='w-full'>
            <AsyncButton className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
              <Image className='w-[22px]' src={IMAGE_URLS.login.loginApple} width={21} height={21} alt=''></Image>
              <span className='font-bold text-xs'>Sign up with Google</span>
            </AsyncButton>
          </div>
          <div className='w-full flex items-center justify-center gap-2'>
            <div className='w-full h-[1px] bg-white opacity-60'></div>
            <div className='text-xs'>OR</div>
            <div className='w-full h-[1px] bg-white opacity-60'></div>
          </div>

          <div className="grid gap-2 w-full">
            <div className="grid gap-2 w-full">
              <Label htmlFor="email"><span className='text-white'>Email*</span></Label>

              <div className='relative font-normal'>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className='pl-5 rounded-full border-white bg-transparent'
                  value={email}
                  autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className='absolute right-2 top-0 h-full flex items-center justify-center'>
                  <AsyncButton
                    variant={'gg'}
                    className='px-3 h-[30px] flex items-center justify-center gap-1 hover:opacity-80 hover:bg-transparent bg-transparent border-white border rounded-full'
                    onClick={sendEmailCode}
                    disabled={countdown !== null}
                  >
                    <span className='font-bold text-xs'>{countdown !== null ? `Resend Code (${countdown})` : 'Send Code'}</span>
                    <Image className='w-[14px]' src={IMAGE_URLS.login.loginArrow} width={14} height={8} alt=''></Image>
                  </AsyncButton>
                </div>
              </div>
            </div>
            <div className="grid gap-2 w-full">
              <div className="flex items-center text-white">
                <Label  htmlFor="password"><span className='text-white'>Code *</span></Label>
              </div>
              <Input
                placeholder='Enter your email code'
                className='pl-5 rounded-full border-white bg-transparent'
                id="password" required
                value={emailCode}
                onChange={(e) => setEmailCode(e.target.value)}
              />
            </div>

          </div>


          <div className='w-full mt-2'>
            <AsyncButton onClick={emailLogin} className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
              <span className='font-bold text-xs'>Login</span>
            </AsyncButton>
          </div>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
            By creating an account, you agree to our <a href="#"> Terms Of Use.</a>{" "}.
            {/* and <a href="#">Privacy Policy</a> */}
          </div>
        </div>
      </div>
    </>
  )
}
