import {useState} from 'react'
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'

const Faqitem = ({item}) => {
  const [isOpen,setisOpen] = useState(false)

  const toggleAccordion =() =>{
    setisOpen(!isOpen)
  }
  return (
    <div className='p-3 cursor-pointer lg:p-5 rouned-[12px] border border-solid border-[#D9DCE2] mb-5'>
            <div className="flex items-center justify-between gap-5" onClick={toggleAccordion}>
                <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-[#181a1E]'>
                    {item.question}
                </h4>
                <div className={` ${isOpen && "bg-blue-500 text-white border-none"} w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center `}>
                  {isOpen? <AiOutlineMinus/> : <AiOutlinePlus/>}

                </div>
            </div>
            {isOpen && ( <div className='mt-4'>
                <p className='text-[16px] leading-7 lg:text-[18px] lg:leading-9 text-[#4E545F]'>
                    {item.content}
                </p>
                </div>
              )}
      
    </div>
  )
}

export default Faqitem
