"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { PEOPLE_URL } from '@/constants'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  title?: string,
  location?: string,
  peopleJoined?: string,
}

const CampDetails = ({title, location, peopleJoined}: Props) => {
  return (
    <div className="flex flex-col justify-between h-full items-start z-20 absolute top-0 left-0 px-8 py-8">
      <div className='flex items-center justify-start flex-row'>
        <div className='bg-green-50 w-[60px] h-[60px] rounded-full flexCenter'>
          <Image
            src='/folded-map.svg'
            alt='map'
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-1 px-4 justify-start items-start">
          <p className='bold-18 text-white'>{title}</p>
          <p className='regular-16 text-white capitalize'>{location}</p>
        </div>
      </div>
      <div className='flexCenter flex-row px-4'>
        {PEOPLE_URL.map((item,i)=>(
          <Image 
            src={item}
            key={i}
            alt='profilePic'
            width={40}
            height={40}
            className={`rounded-full ${i !== 0 ? '-ml-3' : ''}`}
          />
        ))}
        <p className='text-white bold-20 pl-4'>{peopleJoined}+ Joined</p>
      </div>
    </div>
  )
}

const Camp = () => {
  const largeStr = 'lg:w-[650px] lg:h-[450px] lg:absolute lg:right-12 lg:bottom-8 lg:p-12 lg:gap-4';

  useGSAP(() => {
    gsap.to('.text-anim', {
      y: 0,
      opacity: 1,
      duration: 1.5,
        ease: 'power1.inOut',
      scrollTrigger: {
        trigger: "#text-anim",
        start: 'top 90%', 
        end: 'bottom 80%',
        scrub: true, 
        once: true ,
        markers: true
      },
      stagger: 0.5
    })
  }, []);

  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20
    xl:mb-20 lg:h-[950px]'>
      <div className='lg:px-12'>
        <Carousel
          opts={{
            align: "center",
            loop: true,
            duration: 50,
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className='relative w-full h-[340px] lg:h-[650px]'>
                <CampDetails 
                  title='Putuk Truno Camp'
                  location='Prigen, Pasuruan'
                  peopleJoined='50'
                />
                <Image 
                  src='/img-1.png'
                  alt='image-1'
                  layout='fill'
                  objectFit='cover'
                  className='absolute top-0 left-0 lg:rounded-5xl'
                />
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className='relative w-full h-[340px] lg:h-[620px]'>
                <CampDetails 
                  title='Mountain View Camp'
                  location='Somewhere in the Wilderness'
                  peopleJoined='60'
                />
                <Image 
                  src='/img-2.png'
                  alt='image-1'
                  layout='fill'
                  objectFit='cover'
                  className='absolute top-0 left-0 lg:rounded-5xl'
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div id="text-anim" className={`flex items-start justify-start flex-col gap-3 bg-green-50 px-2 py-4 mx-8 
      mt-8 rounded-5xl
        ${largeStr}`}>
        <h2 className='text-white regular-24 lg:regular-64 px-4 pt-4 text-anim translate-y-48 opacity-0'>
          <span className='bold-24 lg:bold-64'>Feeling Lost</span> And Not Knowing The Way?
        </h2>
        <p className='text-white regular-16 lg:regular-16 px-4 pb-4 text-anim translate-y-48 opacity-0'>
          Starting from the anxiety of the climbers when visiting a new climbing location, the 
          possibility of getting lost is very large. That&apos;s why we are here for those of you who 
          want to start an adventure
        </p>
        <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
      </div>

    </section>
  )
}

export default Camp