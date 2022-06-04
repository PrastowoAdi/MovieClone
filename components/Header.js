/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import HeaderIcon from './HeaderIcon'

import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid'
export default function Header() {
  return (
    <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
        <div className='flex mb-5 sm:mb-0'>
            <HeaderIcon
                Icon={HomeIcon}
                title="HOME"
            />
            <HeaderIcon
                Icon={UserIcon}
                title="ACCOUNT"
            />
            <HeaderIcon
                Icon={PhoneIcon}
                title="CONTACT"
            />
            <HeaderIcon
                Icon={InformationCircleIcon}
                title="ABOUT"
            />
        </div>
        <Image
            src="/img/imdb-logo.png"
            width="100"
            height="50"
            className='cursor-pointer active:brightness-110'
        />
    </div>
  )
}
