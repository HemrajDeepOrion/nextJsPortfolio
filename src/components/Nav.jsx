"use client";

import React from 'react'
import { navbar } from './constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const path = usePathname();

  return (
    <nav className='flex gap-8'>
      {
        navbar?.map((item, index) => {
          return (
            <Link href={item?.path} key={index} className={`${path === item?.path &&
               "text-accent border-b-2 border-accent"} font-medium hover:text-accent transition-all`}
            >{item?.name}</Link>
          )
        })
      }
    </nav>
  )
}

export default Nav