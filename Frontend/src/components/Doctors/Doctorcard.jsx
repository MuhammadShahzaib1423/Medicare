import React from 'react';
import { Link } from 'react-router-dom';

const Doctorcard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center text-center">
      <img 
        src={doctor.photo} 
        alt={doctor.name} 
        className="w-44 h-44 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
      <p className="text-gray-500 text-sm">{doctor.specialty}</p>
      
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="text-yellow-500 font-bold">{doctor.avgRating}⭐</span>
        <span className="text-gray-500 text-sm">({doctor.totalRating} Reviews)</span>
      </div>

      <p className="mt-3 text-gray-600 text-sm">{doctor.hospital}</p>
      <p className="
      
      
      
      
      
      
      
      
      
      
      
      
       text-gray-500 text-sm">Patients Treated: <span className="font-bold">{doctor.totalPatients}</span></p>

      <Link to={`/doctors/${doctor.id}`}>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-blue-600 transition">
        See details 
        </button>
      </Link>
    </div>
  );
};

export default Doctorcard;
