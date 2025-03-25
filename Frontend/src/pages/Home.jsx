import React from 'react'
import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import faqImg from '../assets/images/faq-img.png'
import featureimg from '../assets/images/feature-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Faqlist from '../components/Faq/faqlist'

import Doctorlist from '../components/Doctors/Doctorlist'

const Home = () => {
  return (
    <>
    <section className='hero_section bg-no-repeat bg-center bg-cover  pt-[60px] 2xl:h-[800px]'>
      <div className="container max-w-full w-[1440px] px-5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          <div>

            <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-[#181a1E] font-[800] md:text-[60px] md:leading-[70px]'>
  We help patients live a healthy, longer life
</h1>
<p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
  Our dedicated team of medical professionals is committed to providing top-quality healthcare services.  
  We focus on prevention, early diagnosis, and personalized treatment plans to ensure a healthier future for you and your loved ones.
</p>

<button className="btn bg-blue-600 py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px] cursor-pointer">Request an Appointment </button>
            </div>
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[20px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#181a1E]'>30+</h2>
                <span className='w-[100px] h-2 bg-yellow-300 rounded-full block mt-[-6px]'></span>
                <p className='text-[18px] leading-[30px] font-[400] text-textColor'>Years of Experience</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#181a1E]'>15+</h2>
                <span className='w-[100px] h-2 bg-purple-300 rounded-full block mt-[-6px]'></span>
                <p className='text-[18px] leading-[30px] font-[400] text-textColor'>Clinic Location</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-[#181a1E]'>100%</h2>
                <span className='w-[100px] h-2 bg-blue-900 rounded-full block mt-[-6px]'></span>
                <p className='text-[18px] leading-[30px] font-[400] text-textColor'>Patient Satisfaction</p>
              </div>

            </div>
          </div>
 
            <div className='flex gap-[30px] justify-end'>

                <div>
                  <img className='w-full' src={heroImg1} alt="" />
                </div>
                <div className='mt-[30px]'>
                  <img className='w-full mb-[30px]' src={heroImg2} alt="" />  
                <img src={heroImg3} className='w-full' alt="" />
                </div>
            </div>
        </div>    
      </div>

    </section>
 
    <section className='container max-w-full  px-5 mx-auto mt-10 '>
      <div className=' flex justify-center items-center flex-col mx-auto'>
        <h2 className='text-[44px]  leading-[54px] font-[700] text-headingColor'> Providing the best medical services</h2>
        <p>World Class Care for everyone. Our health System offers unmatched,expert health care.

        </p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
        <div className='px-5'>
          <div className="flex items-center justify-center ">
            <img src={icon1} alt="" />
          </div>
          <div className="mt-5 ">
            <h2 className='text-[26px] font-700 text-center font-[400] mt-4 text-center'>Find a Doctor</h2>
            <p>World Class Care for everyone ,Our health System offers unmatched ,expert health care from lab to clinic</p>
            <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-blue-400 hover:border-none">
  <BsArrowRight  />
</Link>

          </div>

        </div>
        <div className='px-5'>
          <div className="flex items-center justify-center ">
            <img src={icon2} alt="" />
          </div>
          <div className="mt-5 ">
            <h2 className='text-[26px] font-700 text-center font-[400] mt-4 text-center'>Find a Location</h2>
            <p>World Class Care for everyone ,Our health System offers unmatched ,expert health care from lab to clinic</p>
            <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-blue-400 hover:border-none">
  <BsArrowRight  />
</Link>

          </div>

        </div>
        <div className='px-5'>
          <div className="flex items-center justify-center ">
            <img src={icon3} alt="" />
          </div>
          <div className="mt-5 ">
            <h2 className='text-[26px] font-700 text-center font-[400] mt-4 text-center'>Book Appointment</h2>
            <p>World Class Care for everyone ,Our health System offers unmatched ,expert health care from lab to clinic</p>
            <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-blue-400 hover:border-none">
  <BsArrowRight  />
</Link>

          </div>

        </div>
      </div>
    </section>

    <About/>

    <section>
      <div className='container max-w-full w-[1440px] px-5 mx-auto mt-10'>
        <div className=" mx-auto">
          <h2 className='text-[44px] leading-[54px] font-[700] text-[#181a1E] text-center '> Our Medical Services</h2>
          <p className='text-center text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]'> World Class Care for everyone.Our health System offers unmatched expert health care</p>
        </div>

        <Services/>
      </div>
    </section>


<section>
  <div className='container max-w-full w-[1440px] px-5 mx-auto  '>
    <div className="flex items-center justify-between flex-col md:flex-row">
<div className='xl:w-[670px]'>
  <h2 className='heading text-[44px] leading-[54px] font-[700] text-[#181a1E]  '>Get virtual treatment  <br /> anytime </h2>
  <ul className='pl-4'>
    <li className=' text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]'>
      1. Get a diagnosis or prescription from a doctor
    </li>
    <li className=' text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]'>
      2. Search for your physician here and contact their office.
    </li>
    <li className=' text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]'>
      3. Schedule an appointment with your doctor.
    </li>

  </ul>
  <Link to='/'> <button className='btn bg-blue-400 py-[15px] px-[35px] rounded-[50px] tesxt-white font-[600] mt-[38px]'>Learn More</button></Link>
</div>
<div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px]  md:mt-20'>
  <img src={featureimg} alt=""  className='w-3/4'/>
</div>
    </div>
  </div>

</section>
    
    <Doctorlist/>

    <section>
      <div className="container max-w-full w-[1440px] px-5 mx-auto mt-10 ">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className='w-1/2 hidden md:block'>
          <img src={faqImg} alt="" className='w-[400px]' />
          </div>
          <div className='w-full md:w-1/2'>
          <h2 className='text-[40px]  leading-[54px] font-[7   00] text-[#181a1E]'>Most questions by our beloved patients</h2>
          <Faqlist/>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home                      
