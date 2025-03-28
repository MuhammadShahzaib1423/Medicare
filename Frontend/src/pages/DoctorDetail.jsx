import {useState} from 'react'
import doctorimg from '../assets/images/doctor-img01.png'
import { doctors } from '../assets/data/doctors'
import { useParams } from 'react-router-dom'
import AboutDoctor from './AboutDoctor'
import Feedback from './FEEDBACK.JSX'
import Sidepanel from './sidepanel.jsx'

const DoctorDetail = () => {
  const { id } = useParams();  
  const [tab, setTab] = useState('about');
  const doctor = doctors.find((doc) => doc.id.toString() === id);
  if (!doctor) {
    return <div className="text-center text-red-500 font-bold mt-10">Doctor Not Found</div>;
  }
  return (
    <>
    <section>
    <div className='max-w-[1170px] px-5 mt-10 mx-auto'>
      <div className='grid md:grid-cols-3 gap-[50px]'>
        <div className='md:col-span-2'>
          <div className="flex items-center gap-5"> 
            <figure className='max-w-[300px] max-h-[300px]'>
              <img src={doctor.photo} alt="" />
            </figure>
            <div>
              <span className='bg-[#CCF0F3] text-[#01b5c5] py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded '>
              {doctor.specialty}
              </span>
              <h3 className='text-[#181a1e]  text-[22px] leading-9 mt-3 font-semiold rounded'> {doctor.name}</h3>
              <p className='text-gray-500'>{doctor.hospital}</p>
              <div className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-[#181a1e]">
                <span>{doctor.avgRating}</span>
                <span>⭐</span>
                <span> ( 20 Reviews)</span>
              </div>
              <p className='text-[14px] leading-[30px] font-[400] text-textColor  md:text-[15px] lg:max-w-[390px] text-gray-500 '>{doctor.notableAchievement}</p>
            </div>
          </div>
          <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
            <button onClick={()=>setTab('about')} className={`${tab==='about' && 'border-b border-solid border-blue-400'} cursor-pointer py-2 px-5 mr-5 text-[16px] leading- text-[#181a1e] font-semibold`}>
              About
            </button>
            <button onClick={()=>setTab('feedback')} className={` ${tab==='feedback' && 'border-b border-solid border-blue-400'} cursor-pointer py-2 px-5 mr-5 text-[16px] leading- text-[#181a1e] font-semibold`}>
              Feedback
            </button>
          </div>
          <div className='mt-[30px]'>
            {tab === 'about' && <p className='text-[14px] leading-[30px] font-[400] text-[#4e545f] mt-[18px]'><AboutDoctor/></p>}
             {tab === 'feedback' && <p className='text-[14px] leading-[30px] font-[400] text-[#4e545f] mt-[18px]'><Feedback/></p>}
        </div>
        </div>
        <div >
        <Sidepanel/>
        </div>
      </div>   
    </div>
    </section>
   
    </>
       
  )
}

export default DoctorDetail
