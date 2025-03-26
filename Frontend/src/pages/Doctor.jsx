import React from 'react'
import Doctorlist from '../components/Doctors/Doctorlist'
import { doctors } from '../assets/data/doctors'
import Doctorcard from '../components/Doctors/Doctorcard'
import Testimoniallist from '../components/Testimonial/Testimoniallist'

const Doctor = () => {
  return (
<>
    <section className='bg-[#fff9ea] mt-10'>

      <div className='container max-w-full w-[1440px] px-5 mx-auto   text-center '>
        <h2 className='text-[44px]  leading-[54px] font-[700] text-[#181a1e]'> Find a doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
  <input
    type="search"
    className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-[#181a1e]"
    placeholder="Search for Doctors"
  />
  <button className="bg-blue-400 py-[15px] px-[35px] text-white font-semibold rounded-r-md">
    Search
  </button>
</div>

      </div>

    </section>
   <Doctorlist />

   <section className='mt-14 '>
      <h1 className='text-[44px]  leading-[54px] font-[700] text-[#181a1e] text-center'> What Our Patient Say</h1>
    <p className='text-[18px] leading-[30px] font-[400] text-[#4e545f] mt-[18px] text-center'> World Class Care for everyone .Our health System Offers unmatched expert healthcare</p>

      <Testimoniallist/>
    </section>


    </>
  )
}

export default Doctor
