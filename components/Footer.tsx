import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' flex flex-wrap gap-4 sm:gap-16 justify-between 
    max-container padding-container mb-16'>
      <Link href='/'><Image src='/hilink-logo.svg' alt="logo" width={74} height={29} /></Link>
      {FOOTER_LINKS.map((item,i)=>(
        <div
          key={i}
          className='flex flex-col justify-start items-start gap-3'
        >
          <h2 className='bold-18'>{item.title}</h2>
          {item.links.map((link,i)=>(
            <Link href='/' key={i} className='regular-14 text-gray-30'>{link}</Link>
          ))}
        </div>
      ))}
      <div className="flex flex-col justify-start items-start gap-3">
        <h2 className='bold-18'>{FOOTER_CONTACT_INFO.title}</h2>
        {FOOTER_CONTACT_INFO.links.map((link,i)=>(
          <p key={i} className='regular-16'>{link.label}: <span className='medium-14'>{link.value}</span></p>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <h2 className='bold-18'>{SOCIALS.title}</h2>
        <div className='flex flex-row gap-2 justify-start items-start'>
          {SOCIALS.links.map((link,i)=>(
            <Image key={i} src={link} alt='socialImg' width={30} height={30} />
          ))}
        </div>
      </div>
      <div className="w-full ">
        <hr className='border-t-2 border-gray-300' />
      </div>
      <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
    </footer>
  )
}

export default Footer