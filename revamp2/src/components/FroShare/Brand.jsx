import React, {useEffect, useRef}  from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "../../styles/brands.css";
import  BrandsSM from './BrandsSM';
import ReactGA from 'react-ga4';

const Brands = React.memo(() => {
    const marquueeContentRef = useRef(null);

    useEffect(() => {
        const marquueeContent = marquueeContentRef.current;
        const marquueeElementsDisplayed = getComputedStyle(document.documentElement).getPropertyValue("--marquuee-elements-displayed");

        document.documentElement.style.setProperty("--marquuee-elements", marquueeContent.children.length);

        const cloneAndAppend = () => {
            for (let i = 0; i < marquueeElementsDisplayed; i++) {
                marquueeContent.appendChild(marquueeContent.children[i].cloneNode(true));
            }
        };

        const handleAnimationEnd = () => {
            while (marquueeContent.firstChild && marquueeContent.firstChild.offsetWidth <= 0) {
                marquueeContent.removeChild(marquueeContent.firstChild);
            }
            cloneAndAppend();
        };

        marquueeContent.addEventListener('animationend', handleAnimationEnd);

        cloneAndAppend();

        return () => {
            marquueeContent.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    const Download = () => { 
        window.open("https://froker.app.link/");
        ReactGA.event('event', 'Froshare_Brand',{
            category: 'Blog',
            action: 'User Reached Middle',
          });
      } 

  return (
    <div className='w-full h-full bg-[#3d0307] flex flex-col justify-start items-center '>
        <div className='sm:hidden lg:flex xl:flex min-[280px]:hidden w-full h-[50vh] flex flex-col justify-center items-center relative'>
            <div className='w-[18%] absolute top-4 left-24'>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722936643/Website_Revamp/Frame_1171278794_n4jeud.webp'}  alt="Rocket Icon"/>
            </div>
            <div className='w-[20%] absolute top-14 right-24'>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722936647/Website_Revamp/Frame_1171278794_1_zzuayh.webp'}  alt="flying jatt" className='h-full w-full'/>
            </div>
            <div className='text-white font-Gilroy font-bold md:text-6xl lg:text-7xl pb-2'>Froshare</div>
            <div className='font-Gilroy font-medium md:text-xl lg:text-2xl text-white pt-3 pb-7 tracking-wider'>The Ultimate Affiliate Marketing Solution</div>
            <div className='object-contain bg-[#272727] rounded-full flex justify-evenly items-center'>
                <div className='p-5 flex justify-center items-center text-white'>www.Froshare.in/ <sapn className='text-[#C30010] font-Gilroy font-bold'> Your_name</sapn></div>
                <div onClick={Download} className='bg-gradient-to-r from-red-500 via-red-500 to-red-600 object-contain rounded-full flex justify-center items-center mr-3 p-3 text-white cursor-pointer w-[12vw]'> Get Started <IoIosArrowForward className='pl-2 size-6 md:size-6' color='white'/> </div>
            </div>
        </div>

        <div className="flex lg:hidden w-full justify-center items-center ">
            <BrandsSM/>
        </div>
        
        <div className="marquuee w-full h-[40vh] flex flex-col overflow-hidden justify-center items-center">
            <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1711179390/Frame_16_g4ycue.png'} alt="the thread background" className='absolute flex justify-center h-[40vh] object-cover'/>
            <div className='font-Gilroy font-medium text-xl md:text-2xl lg:text-3xl text-white flex justify-center items-center pt-10'>Brands Unlocked for You!</div>
            <div className="marquuee-content w-full h-[20vh] lg:h-[30vh] relative flex justify-start items-center gap-5 lg:gap-20" ref={marquueeContentRef}>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722937732/Website_Revamp/meesho_oiohdv_cdcjii.webp'} alt="Meesho"/>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722937732/Website_Revamp/rayban_refkua_c0qkgy.webp'} alt="RayBan"/>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722937732/Website_Revamp/myntra_ilrzlo_kz5fgz.webp'} alt="Myntra"/>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722937733/Website_Revamp/h_M_elxyif_icup1c.webp'} alt="Fastrack"/>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722937737/Website_Revamp/fastrack_scnkzf_vvnlsl.webp'} alt="H&M"/>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722937737/Website_Revamp/ajio_x6sxei_sxgpxe.webp'} alt="AJIO"/>
            </div>
        </div>
    </div>
  )
})

export default Brands
