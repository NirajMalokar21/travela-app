"use client"
import { FEATURES } from '@/constants'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  useGSAP(() => {
    gsap.to('.anim-scroll', {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 1.5,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: "#anim-trig",
        start: 'top 90%', 
        end: 'bottom 80%',
        once: true ,
      },
      stagger: 0.5
    })
  }, [])
  return (
    <section className='flex-row flex justify-start items-center overflow-hidden 
    bg-feature-bg max-md:bg-center lg:bg-left bg-no-repeat py-4 h-full w-full lg:pb-24'>
      <div className='lg:flex relative ml-12 lg:min-h-[900px] lg:w-1/3 hidden'>
        <Image 
          src='/phone.png'
          alt='phone'
          width={400}
          height={200}
          className='feature-phone '
        />
      </div>
      <div className="flex flex-col justify-start lg:ml-24 items-start gap-8 lg:w-2/3 w-full px-6">
        <div>
          <Image
            src='/camp.svg'
            alt="camp"
            width={60}
            height={60}
            className="relative top-[20px] w-10 lg:w-[50px]"
          />
          <h2 className='bold-64 max-sm:bold-40'>Our Features</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full'>
          {FEATURES.map((feat,i)=>(
            <div
              id='anim-trig'
              key={i}
              className='flex flex-col gap-6 lg:w-[300px] anim-scroll -translate-y-64 opacity-0'
            >
              <div className='bg-green-50 w-[60px] h-[60px]  rounded-full flexCenter'>
                <Image
                  src={feat.icon}
                  alt='map'
                  width={40}
                  height={40}
                  className='lg:mx-4 '
                />
              </div>
              <p className='bold-20 lg:bold-32'>{feat.title}</p>
              <p className='regular-16 text-gray-30'>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features