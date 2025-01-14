import Button from '@/components/common/Button'
import Image from 'next/image'
import React from 'react'
import motion from 'framer-motion'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-20'>
      <div className='hero-map' />
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src="/camp.svg"
          alt='camp'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-52 lg:bold-70 mt-6'>Discover, Plan, and Explore the World Effortlessly with <span className="text-[#6495ED]">TravelHive</span></h1>
        <p className='regular-16 mt-6 text-gray-50 xl:max-w-[520px]'>Your ultimate travel companion. Find dream destinations, create personalized itineraries, and unlock unforgettable
          experiences—all in one place
        </p>
        <div className='my-11 flex flex-wrap gap-4'>
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt='star'
                width={24}
                height={24}
              />
            ))}


          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>198k
            <span className='regular-16 text-gray-50 lg:regular-20 ml-1'>Excellent Reviews</span>
          </p>
        </div>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
            type='button'
            title='Download'
            variant='btn_blue'
          />
          <Button
            type='button'
            title='How do we work?'
            icon='/play.svg'
            variant='btn_white_text'
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start border-2">
        <div className="relative z-20 w-[268px] flex-col gap-8
      rounded-3xl bg-blue-70 px-7 py-12" >


          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Location</p>
              <Image
                src="/close.svg"
                alt='close'
                width={24}
                height={24}
              />
            </div>
            <p className='bold-16 text-white'>Kathmandu</p>
          </div>

          <div className='flexBetween'>

            <div className='flex flex-col'>
              <p className='regular-16 text-gray-20 block'>Distance</p>
              <p className='bold-20 text-white'>224.21 km</p>
            </div>

            <div className='flex flex-col'>
              <p className='regular-16 text-gray-20 block'>Elevation</p>
              <p className='bold-20 text-white'>2.24 km</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero