import React from 'react'
import aboutimg from '../../assets/images/about.png'
import aboutimg2 from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container max-w-full w-[1440px] px-5 mx-auto mt-10 '>
      <div className='flex flex-col md:flex-row  gap-[50px]'>
        
        {/* Left Side - Image */}
        <div className='relative w-full md:w-1/2 z-10'>
          <img src={aboutimg} alt=""  />
          <div className='absolute bottom-0 z-20 right-0 md:right-10'>
            <img src={aboutimg2} alt="" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className='w-full md:w-1/2'>
          <h2 className='text-[44px] leading-[54px] font-[700] text-[#181a1E]'>
            Proud to be one of the nation’s best
          </h2>
          <p className='mt-5 text-[18px] leading-[28px] text-gray-600'>
            World-class care for everyone. Our health system offers unmatched, expert healthcare.
          </p>
          <p className='mt-5 text-[18px] leading-[28px] text-gray-600'>
            We provide state-of-the-art medical treatments with a patient-first approach, ensuring better health and well-being.
          </p>
          <Link to='/'>
            <button className='bg-blue-600 text-white py-3 px-6 cursor-pointer rounded-full font-[600] mt-5 hover:bg-blue-700 transition duration-300'>
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default About
