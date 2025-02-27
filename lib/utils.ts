import { type ClassValue, clsx } from "clsx"
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const openUrl = (url:any) => {
  if (!url) {
    return toast.error('Coming soon');
  }
  if (window) {
    window.open(url, '_blank');
  }
};

export const openLocationUrl = (url:any, query?:any) => {
  if (!url) {
    return toast.error('Coming soon');
  }
  // console.log('Router', Router, url)
  // // Router.push(url)
  // Router.push({pathname: url, query})
};