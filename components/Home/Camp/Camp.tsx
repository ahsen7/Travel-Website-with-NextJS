import React from 'react'
import Campsite from './Campsite'
import Image from 'next/image'

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20
    xl:mb-20 '>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
       overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Campsite
          backgroundImage='bg-bg-img-1'
          title='Golden Dunes Camp'
          subtitle='Desert Escape'
          peopleJoined='20+ people joined'
        />
        <Campsite
          backgroundImage='bg-bg-img-2'
          title='Whispering Pines Retreat'
          subtitle='Forest Haven'
          peopleJoined='15+ people joined'
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className='bg-[#6495ED] p-8 lg:max-w-[500px] 
    xl:max-w-[734px] xl:rounded-5xl xl:px-16 
    xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>
              Your Gateway </strong> to the Wild
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'> Experience curated camping journeys that blend comfort, exploration,
            and nature’s charm. From serene forest retreats to golden desert dunes,
            we provide everything you need for an unforgettable adventure. Enjoy premium amenities,
            expert guidance, and the perfect balance between relaxation and thrill..</p>
            <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className='camp-quote'
            />
        </div>
      </div>

    </section>
  )
}

export default Camp