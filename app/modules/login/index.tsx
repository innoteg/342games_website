import React from 'react';

import { IMAGE_URLS } from "@/lib/constants/urls";
import { AsyncButton } from '@/components/AsyncButton'
import Image from 'next/image';
export default function LoginPage() {
  return (
    <div className="w-full items-center justify-center">
      <div>Create a free account</div>
      <div>
        <AsyncButton className='w-[20px] h-[20px]'>
          <Image src={IMAGE_URLS.login.loginGoogle} width={20} height={20} alt=''></Image>
        </AsyncButton>
      </div>

      <div>
        <AsyncButton className='w-[20px] h-[20px]'>
          <Image src={IMAGE_URLS.login.loginGoogle} width={20} height={20} alt=''></Image>
        </AsyncButton>
      </div>
      <div></div>
    </div>
  )
}
