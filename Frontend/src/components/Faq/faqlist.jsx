import React from 'react'
import Faqitem from './faqitem'
import {faqs} from '../../assets/data/faqs'

const Faqlist = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((item,index)=>(
            <Faqitem item={item} key={index} index={index}/>
        ))}
    </ul>
  )
}

export default Faqlist
