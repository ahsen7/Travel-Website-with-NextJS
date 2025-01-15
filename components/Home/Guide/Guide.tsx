import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className='padding-container max-container w-full pb-24'>
        <Image
          src="/camp.svg"
          alt='camp'
          width={50}
          height={50}
        />
        <p className='uppercase regular-16 mt-2 mb-3
         text-[#6495ED]'>
          Expert Guides, Unmatched Adventures
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-width-[390px]'>Your Trusted Path to Explore and Conquer</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Embark on a journey with seasoned guides who know every trail, peak, and hidden gem.
            Whether you’re a beginner or a seasoned explorer, our expert guides provide personalized insights,
            safety tips, and local knowledge to make your camping experience seamless and unforgettable.</p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image
          src="/bg-3.jpg"
          alt='camps'
          width={1440}
          height={520}
          className="w-full object-cover object-center xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 
      pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%]
       lg:top-20">
          <Image
            src="/meter.svg"
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className="bold-16 text-[#6495ED]">30 min</p>
              </div>
              <p className='bold-20 mt-2'>Golden Dunes Camp</p>
            </div>

            <div className="flex w-full flex-col">

              <p className='regular-16 text-gray-20'>Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Whispering Pines Retreat</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide