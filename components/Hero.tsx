"use client"
import Image from "next/image"
import Button from "./Button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {
  useGSAP(() => {
    gsap.to('#intro', {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power1.inOut'
    })

    gsap.to('#black-box', {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power1.inOut'
    })
  }, [])
  return (
    <section className='max-container padding-container 
    flex flex-col gap-20 py-6 pb-32 md:gap-28 lg:py-8 xl:flex-row'>
      <div className="hero-map lg:translate-x-32 lg:translate-y-16"/>
      <div id="intro" className="relative z-20 flex flex-1 flex-col pr-20 xl:w-1/2 translate-x-48 opacity-0">
        <Image 
          src='/camp.svg'
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
          <h1 className="bold-52 lg:bold-88 pb-6">Putuk Truno Camp Area</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-2-[520px]">
            We want to be on each of your journeys seeking the satisfaction of 
            seeing the incorruptible beauty of nature. We can help you on an adventure 
            around the world in just one app
          </p>
          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2 pb-6">
              {Array(5).fill(1).map((_, index) => (
                <Image 
                  key={index}
                  src='/star.svg'
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
              <p className="bold-16 lg:bold-20 text-blue-70">198k 
                <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span></p>
            </div>

            <div className="flex flex-row w-full gap-3 max-sm:flex-col">
              <Button 
                type="button"
                title="Download App"
                variant="btn_green"
              />
              <Button 
                type="button"
                title="How we work"
                icon="/play.svg"
                variant="btn_white"
              />
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 items-start">
            <div id="black-box" className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl 
            bg-green-90 px-7 py-8 -translate-y-48 opacity-0">

              <div className="flex flex-col gap-6">
                <div className="flexBetween">
                  <div className="flex flex-col">
                    <p className="regular-16 text-gray-20">Location</p>
                    <p className="bold-20 text-white">Aguas Calientes</p>
                  </div>
                  <Image 
                    src='/close.svg'
                    alt="close"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flexBetween">
                  <div className="flex flex-col">
                    <p className="regular-16 block text-gray-20">Distance</p>
                    <p className="bold-20 text-white">173.28 mi</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="regular-16 block text-gray-20">Elevation</p>
                    <p className="bold-20 text-white">2.040km</p>
                  </div>
                </div>
              </div>
            </div>
        </div>


    </section>
  )
}

export default Hero