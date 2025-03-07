import React from 'react';
import { fetchData } from '@/lib/utils/request';
import { IMAGE_URLS } from "@/lib/constants/urls";
import { AsyncButton } from '@/components/AsyncButton'
import Image from 'next/image';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function LoginPage() {
  const sendEmailCode = async () => {
    const { code, data } = await fetchData('app/user/sendEmailCode')
  }
  const emailLogin = async () => {
    const { code, data } = await fetchData('app/user/emailLogin')
  }
  return (
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
            <Label htmlFor="email">Email*</Label>

            <div className='relative font-normal'>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className='pl-5 rounded-full border-white bg-transparent'
              />
              <div className='absolute right-2 top-0 h-full flex items-center justify-center'>
                <AsyncButton variant={'gg'} className='px-3 h-[30px] flex items-center justify-center gap-1 hover:opacity-80 hover:bg-transparent bg-transparent border-white border rounded-full'>
                  <span className='font-bold text-xs'>Send Code</span>
                  <Image className='w-[14px]' src={IMAGE_URLS.login.loginArrow} width={14} height={8} alt=''></Image>
                </AsyncButton>
              </div>
            </div>
          </div>
          <div className="grid gap-2 w-full">
            <div className="flex items-center">
              <Label htmlFor="password">Code *</Label>
            </div>
            <Input
              placeholder='Enter your email code'
              className='pl-5 rounded-full border-white bg-transparent'
            id="password" required />
          </div>

        </div>


        <div className='w-full mt-2'>
          <AsyncButton className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
            <span className='font-bold text-xs'>Login</span>
          </AsyncButton>
        </div>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          By creating an account, you agree to our <a href="#"> Terms Of Use.</a>{" "}.
          {/* and <a href="#">Privacy Policy</a> */}
        </div>
      </div>
    </div>
  )
}
