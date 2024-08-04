import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexBetween flex-col lg:px-10 pb-12'>
      <div className='flex flex-col lg:flex-row lg:justify-between pb-16 w-full padding-container'>
        <div className="flex flex-col items-start justify-start w-full h-full lg:w-[390
        px]">
          <Image
            src='/camp.svg'
            alt="camp"
            width={50}
            height={50}
            className="relative left-[-5px] w-10 lg:w-[50px]"
          />
          <p className='regular-16 text-green-50 pb-2'>WE ARE HERE FOR YOU</p>
          <h2 className='bold-64 max-sm:bold-40'>Guide You to Easy Path</h2>
        </div>
        <div className='flex items-center justify-start w-full lg:w-[600px] lg:pl-16 pt-8 lg:pt-16'>
          Only with the hilink application you will no longer get lost and get lost again, because we already 
          support offline maps when there is no internet connection in the field. Invite your friends, relatives 
          and friends to have fun in the wilderness through the valley and reach the top of the mountain
        </div>
      </div>
      <div className="flexCenter relative w-full h-[340px] lg:h-[550px]">
        <Image 
          src='/boat.png'
          alt='Boat'
          layout='fill'
          objectFit='cover'
          className='top-0 left-0 lg:rounded-5xl mx-auto'
        />
        <div className='absolute z-20 md:top-18 lg:top-20 md:left-20 px-4 py-10 bg-white h-[250px] w-[300px] 
        rounded-5xl flexStart flex-row justify-start'>
          <Image 
            src='/meter.svg'
            alt='meter'
            width={30}
            height={200}
          />
          <div className='flex justify-between items-start pl-4 flex-col w-full h-full'>
            <div className='flex flex-col items-center justify-start gap-2'>
              <div className='flexBetween flex-row w-full'>
                <p className='regular-18 text-gray-20'>Destination</p>
                <p className='bold-18 text-green-50'>48 min</p>
              </div>
              <p className='bold-20'>Aguas Calientes</p>
            </div>
            <div className='flex flex-col items-center justify-start gap-2'>
              <div className='flexBetween flex-row w-full'>
                <p className='regular-18 text-gray-20'>Start track</p>
              </div>
              <p className='bold-20'>Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide