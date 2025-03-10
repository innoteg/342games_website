
'use client';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'

import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  // DialogTrigger,
} from '@/components/ui/dialog';

import toast from 'react-hot-toast';
import { AsyncButton } from '@/components/AsyncButton'

import { IMAGE_URLS } from '@/lib/constants/urls';

export default (function DialogCloseButton(props: any) {
  const [loading, setLoading] = React.useState(false);

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="common">Play Now</Button>

      </DialogTrigger>
      <DialogHeader></DialogHeader>
      <DialogTitle></DialogTitle>

      <DialogContent className="w-[460px] h-[295px] rounded-[4px] bg-[#000000] text-white flex flex-col justify-center items-center"
        style={{ border: '1px solid #202020' }}>
        
        <DialogFooter className="flex">
          <AsyncButton className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
            <Image className='w-[22px]' src={IMAGE_URLS.login.loginGoogle} width={21} height={21} alt=''></Image>
            <span className='font-bold text-xs'>Sign up with Google</span>
          </AsyncButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
