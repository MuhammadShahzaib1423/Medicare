import React from 'react';
import { doctors } from '../assets/data/doctors';
import { useParams } from 'react-router-dom';

const AboutDoctor = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id.toString() === id);

  return (
    <section className='w-full'>
      <h1 className='text-[22px] leading-[54px] font-[700] text-[#181a1e]'>
        About <span className='text-[#01b5c5]'>{doctor.name}</span>
      </h1>
      <p className='text-[18px] leading-[30px] font-[400] text-[#4e545f] mt-[18px]'>{doctor.description}</p>
      
      {/* Education Section */}
      <div className='mt-12'>
        <h2 className='text-[24px] text-[#000000] font-bold'>Education</h2>
        {Object.keys(doctor.education).map((degree) => (
          <div className='mt-6' key={degree}>
            <p className='text-[#01b5c5] text-[16px] font-semibold'>{doctor.education[degree].year}</p>
            <div className='flex justify-between'>
              <h3 className='text-[#000000] text-[18px] font-semibold'>{doctor.education[degree].field}</h3>
              <p className='text-[#4e545f] text-[14px] font-normal'>{doctor.education[degree].university}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className='mt-12'>
        <h2 className='text-[24px] text-[#000000] font-bold'>Experience</h2>
        <p className='text-[18px] text-[#01b5c5] font-semibold mt-2'>{doctor.experience.years} years of experience</p>
        
        {doctor.experience.previousRoles.map((role, index) => (
          <div className='mt-6' key={index}>
            <h3 className='text-[#000000] text-[18px] font-semibold'>{role.title}</h3>
            <p className='text-[#4e545f] text-[16px]'>{role.hospital} ({role.years})</p>
          </div>
        ))}
      </div>

      {/* Expertise Section */}
      <div className='mt-12'>
        <h2 className='text-[24px] text-[#000000] font-bold'>Areas of Expertise</h2>
        <ul className='mt-4 list-disc pl-5 text-[16px] text-[#4e545f]'>
          {doctor.experience.expertise.map((expertise, index) => (
            <li key={index}>{expertise}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutDoctor;
