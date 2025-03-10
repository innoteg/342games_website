
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
  const { open, setOpen } = props
  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val)
    }}>
      {/* <DialogTrigger asChild>
        <Button variant="common">Play Now</Button>
      </DialogTrigger> */}
      <DialogHeader></DialogHeader>
      <DialogTitle></DialogTitle>

      <DialogContent className="w-[350px] sm:w-[350px] rounded-[20px]  sm:rounded-[30px] text-white flex flex-col justify-center  border-none"
        style={{ background: 'linear-gradient(0deg, #0940B6 0%, #FF00FB 100%)' }}>
        <div className='text-white text-[20px] sm:text-[35px] mb-10'>How to play with</div>
        <div className="flex flex-col gap-[40px]">
          <AsyncButton className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
            <span className='font-bold text-xs'>Play on</span>
            <Image className='w-[22px]' src={IMAGE_URLS.header.telegram} width={21} height={21} alt=''></Image>
          </AsyncButton>

          <AsyncButton className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
            <span className='font-bold text-xs'>Play on</span>
            <Image className='w-[22px]' src={IMAGE_URLS.header.x} width={21} height={21} alt=''></Image>
          </AsyncButton>

          <AsyncButton className='w-full flex items-center justify-center gap-4 hover:opacity-60'>
            <span className='font-bold text-xs'>Play on</span>
            <span className='font-bold text-xs'>LINE</span>

          </AsyncButton>
        </div>
        <DialogFooter className="flex flex-col">

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
