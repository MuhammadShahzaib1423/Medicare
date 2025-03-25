import React from 'react';
import { doctors } from '../../assets/data/doctors';
import Doctorcard from './Doctorcard';

const Doctorlist = () => {
  return (
    <div className="container mx-auto px-5 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet Our Doctors</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3   1">
        {doctors.map((doctor) => (
          <Doctorcard doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
};

export default Doctorlist;
 