import React from 'react';
import Servicecard from './Servicecard';
import { services } from '../../assets/data/services';

const Services = () => {
  return (
    <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] mt-[30px] cursor-pointer lg:mt-[55px] gap-5">
      {services.map((item, index) => (
        <Servicecard item={item} key={index} index={index} />
      ))}
    </div>
  );
};

export default Services;
