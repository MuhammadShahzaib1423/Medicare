import {useState} from 'react'

const Faqitem = ({item}) => {
  return (
    <div className='p-3 cursor-pointer lg:p-5 rouned-[12px] border border-solid border-[#D9DCE2] mb-5'>
            <div className="flex items-center justify-between gap-5">
                <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-[#181a1E]'>
                    {item.question}
                </h4>
            </div>
      
    </div>
  )
}

export default Faqitem
