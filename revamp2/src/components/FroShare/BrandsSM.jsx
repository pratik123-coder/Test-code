import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import ReactGA from 'react-ga4';


const BrandsSM= React.memo(() => {
    const Download = () => { 
        window.open("https://froker.app.link/");
        ReactGA.event('event', 'Froshare_BrandM',{
            category: 'Blog',
            action: 'User Reached Middle',
          });
      } 

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex w-full justify-center items-center gap-[30%] mt-8'>
            <div className='w-[30%] ms-2 flex justify-center items-center'>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1723032509/Website_Revamp/Group_1171277335_dur552.webp'}  alt="Rocket Icon" className='w-full h-full'/>
            </div>
            <div className='w-[34%] flex justify-center pt-6 items-end ml'>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1723032505/Website_Revamp/Frame_1171278795_uo9zus.webp'}  alt="Rainbow" className='w-full h-full'/>
            </div>
        </div>

        <div className='text-[#C30010] font-Gilroy font-bold text-4xl sm:text-5xl'>Froshare</div>
        <div className='font-Gilroy font-medium text-sm sm:text-xl text-center text-white pt-4 pb-5'>The Ultimate Affiliate Marketing Solution</div>
        <div className='object-contain bg-[#363636] rounded-full flex justify-evenly items-center'>
            <div className='pt-3 pb-3 pl-7 pr-7 flex justify-center items-center text-white text-sm sm:text-lg '>www.Froshare.in/ <sapn className='text-[#C30010] font-Gilroy font-bold'> Your_name</sapn></div>
        </div>
        <div onClick={Download} className='pl-5 pr-5 pt-2 pb-2 bg-gradient-to-r from-red-700 via-red-700 to-red-800 object-contain rounded-full flex justify-center items-center mt-3 text-white cursor-pointer text-sm sm:text-lg '> Get Started <FaArrowRightLong className='pl-2 size-6 md:size-6' color='white'/> </div>

    </div>
  )
})

export default BrandsSM
