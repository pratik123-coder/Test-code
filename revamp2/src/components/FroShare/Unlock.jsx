import React, {useState, useEffect, useRef} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../../styles/bar1.css";


function Unlock () {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
    const unlockRef = useRef(null);

    useEffect(() => {
        Aos.init({ duration: 800 });
      }, []);

      useEffect(() => {
        const handleResize = () => {
            let currentRef = unlockRef.current;

            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting && !initialAnimationComplete) {
                    const animationDuration = 1000;
                    const animationInterval = 20;
                    const totalSteps = animationDuration / animationInterval;
                    const endValue = 300000;
                    const stepValue = endValue / totalSteps;
                    let currentStep = 0;
                    const intervalId = setInterval(() => {
                        const stepProgress = stepValue * currentStep;
                        setProgress1(stepProgress);
                        currentStep++;
                        if (currentStep >= totalSteps) {
                            clearInterval(intervalId);
                            setProgress1(endValue);
                        }
                    }, animationInterval);

                    const stepValue2 = 50 / totalSteps;
                    let currentStep2 = 0;
                    const intervalId2 = setInterval(() => {
                        const stepProgress2 = stepValue2 * currentStep2;
                        setProgress2(stepProgress2);
                        currentStep2++;
                        if (currentStep2 >= totalSteps) {
                            clearInterval(intervalId2);
                            setProgress2(50);
                            setInitialAnimationComplete(true);
                        }
                    }, animationInterval);

                    return () => {
                        clearInterval(intervalId);
                        clearInterval(intervalId2);
                    };
                }
            }, {
                threshold: 0.1, // Adjusted to start animation when 10% of the component is visible
            });

            if (currentRef) {
                observer.observe(currentRef);
            }

            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [initialAnimationComplete]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                    if (!initialAnimationComplete) {
                        const animationDuration = 1000;
                        const animationInterval = 20;
                        const totalSteps = animationDuration / animationInterval;
                        const endValue = 300000;
                        const stepValue = endValue / totalSteps;
                        let currentStep = 0;
                        const intervalId = setInterval(() => {
                            const stepProgress = stepValue * currentStep;
                            setProgress1(stepProgress);
                            currentStep++;
                            if (currentStep >= totalSteps) {
                                clearInterval(intervalId);
                                setProgress1(endValue);
                            }
                        }, animationInterval);

                        const stepValue2 = 50 / totalSteps;
                        let currentStep2 = 0;
                        const intervalId2 = setInterval(() => {
                            const stepProgress2 = stepValue2 * currentStep2;
                            setProgress2(stepProgress2);
                            currentStep2++;
                            if (currentStep2 >= totalSteps) {
                                clearInterval(intervalId2);
                                setProgress2(50);
                                setInitialAnimationComplete(true);
                            }
                        }, animationInterval);
        
                        return () => clearInterval(intervalId);
                    }
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [initialAnimationComplete]);

    const handleChange1 = (e) => {
        const newProgress = parseInt(e.target.value);
        setProgress1(newProgress);
    };

    const handleChange2 = (e) => {
        const newProgress = parseInt(e.target.value);
        setProgress2(newProgress);
    };

    const formatProgress1 = (value) => {
        if (value >= 1000000) {
            return "1M";
        } else if (value >= 99999) {
            return Math.round(value / 1000) + "k";
        } else if (value >= 1000) {
            return Math.round(value / 1000) + "K";
        } else {
            return value.toString();
        }
    };

    const calculationFunc = ()=>{
        let total = 0;

        if(1000 <= progress1 && progress1 < 10000){
            total = progress1 * progress2;
            if (progress2 <= 10) {
                return `${Math.round(total / 1000)}`;
            } else if (progress2 > 10 && progress2 <= 20) {
                return `${Math.round(total / 12000)}`;
            } else if (progress2 > 20 && progress2 <= 30) {
                return `${Math.round(total / 14000)}k`;
            } else if (progress2 > 30 && progress2 <= 40) {
                return `${Math.round(total / 1600)}k`;
            } else if (progress2 > 40 && progress2 <= 50) {
                return `${Math.round(total / 17000)}L`;
            } else if (progress2 > 50 && progress2 <= 60) {
                return `${Math.round(total / 18000)}L`;
            } else if (progress2 > 60 && progress2 <= 70) {
                return `${Math.round(total / 20000)}L`;
            } else if (progress2 > 70 && progress2 <= 80) {
                return `${Math.round(total /22000)}L`;
            } else if (progress2 > 80 && progress2 <= 90) {
                return `${Math.round(total / 24000)}L`;
            } else {
                return `${Math.round(total / 26000)}L`;
            }
        }
        else if(10000 <= progress1 && progress1 < 1000000){
            total = progress1 * progress2;
            if (progress2 <= 10) {
                return `${Math.round(total / 100000)}k`;
            } else if (progress2 > 10 && progress2 <= 20) {
                return `${Math.round(total / 90000)}k`;
            } else if (progress2 > 20 && progress2 <= 30) {
                return `${Math.round(total / 80000)}k`;
            } else if (progress2 > 30 && progress2 <= 40) {
                return `${Math.round(total / 7000000)}L`;
            } else if (progress2 > 40 && progress2 <= 50) {
                return `${Math.round(total / 6000000)}L`;
            } else if (progress2 > 50 && progress2 <= 60) {
                return `${Math.round(total / 5000000)}L`;
            } else if (progress2 > 60 && progress2 <= 70) {
                return `${Math.round(total / 4000000)}L`;
            } else if (progress2 > 70 && progress2 <= 80) {
                return `${Math.round(total / 3000000)}L`;
            } else if (progress2 > 80 && progress2 <= 90) {
                return `${Math.round(total / 2000000)}L`;
            } else {
                return `${Math.round(total / 1000000)}L`;
            }
        }else{
            total = progress1 * progress2;
            if (progress2 <= 10) {
                return `${Math.round(total / 10000)}k`;
            } else if (progress2 > 10 && progress2 <= 20) {
                return `${Math.round(total / 90000)}k`;
            } else if (progress2 > 20 && progress2 <= 30) {
                return `${Math.round(total / 80000)}k`;
            } else if (progress2 > 30 && progress2 <= 40) {
                return `${Math.round(total / 7000000)}L`;
            } else if (progress2 > 40 && progress2 <= 50) {
                return `${Math.round(total / 6000000)}L`;
            } else if (progress2 > 50 && progress2 <= 60) {
                return `${Math.round(total / 5000000)}L`;
            } else if (progress2 > 60 && progress2 <= 70) {
                return `${Math.round(total / 4000000)}L`;
            } else if (progress2 > 70 && progress2 <= 80) {
                return `${Math.round(total / 3000000)}L`;
            } else if (progress2 > 80 && progress2 <= 90) {
                return `${Math.round(total / 2000000)}L`;
            } else {
                return `${Math.round(total / 1000000)}L`;
            }
        }
    }
    return (
    <div className='flex flex-col justify-center items-center pt-10 bg-black' ref={unlockRef}>

        <div className=' w-full md:w-[90%] flex flex-col md:flex-row justify-center md:justify-start md:pl-16 items-center gap-2 lg:gap-5 pb-5'>
                <div class='flex justify-center items-center w-[16%] sm:w-[18%] md:w-[14%] lg:w-[10%]'>
                    <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1723028818/Website_Revamp/Untitled_design_1_1_qephbz.webp'} alt='unlock' className='w-[80%]'/>
                </div> 
                <div className='flex flex-col justify-center items-center gap-2 lg:gap-4 md:items-start'>
                    <div className='flex justify-center items-center text-[#C30010] font-Gilroy font-bold text-center space-y-2 text-xl sm:text-3xl md:text-2xl lg:text-4xl '>Unlock Your Influencer Potential!</div>
                    <div className='flex flex-col justify-center items-center text-center font-Gilroy font-medium text-white lg:text-2xl xl:text-2xl'>Get a Quick Snapshot of Your Earning Potential.</div>
                </div>
        </div>

        <div class='p-8 w-[90%] md:w-[80%] h-full flex flex-col justify-evenly items-start border-[1px] border-black shadow-[5px_5px_0_0_#C9C9C9] shadow-red  rounded-2xl bg-[#3D3D3D]'>

            <div className='text-white text-lg font-semibold'>I have <span className='text-[#C30010] text-lg font-semibold'>{initialAnimationComplete
                        ? `${formatProgress1(progress1)} Followers`
                        : `1M Followers`}
                        </span> on Instagram</div>
                    
            <div className="flex flex-col md:flex-row justify-start items-center h-[80px] w-full gap-[4%] mb-[2rem]">     
                <div className="w-full mt-[2rem] md:mt-0 h-[4rem] relative flex justify-center items-center ">
                    <div className="range__slider w-full h-[1.4rem] rounded-lg overflow-hidden">
                        <div
                            className="range__slider-line w-full h-[70px]"
                            style={{ width: `${(progress1 - 500) / 9950}%` }}
                        ></div>
                    </div>
                    <div className="range__thumb w-[4%] md:w-[1.6%]" style={{ left: `${window.innerWidth < 768 ? (progress1 - 600)/10100:(progress1 - 500) / 10100}%` }}>
                        <div className="range__value">
                            <span className="range__value-number font-Gilroy text-sm font-normal">{formatProgress1(progress1)}</span>
                        </div>
                    </div>
                    <input
                    type="range"
                    min="1000"
                    max="1000000"
                    value={progress1}
                    step="1"
                    onChange={handleChange1}
                    className="range__input"
                    />
                </div>
            </div>

            <div className='text-white text-lg font-semibold'>I typically share around<span className='text-[#C30010] text-lg font-semibold'> {initialAnimationComplete
                    ? `${progress2} Posts`
                    : `100 Followers`}
                    </span><span> on instagram</span><span className='text-[#3D3D3D] font-normal'> (Per Month)</span> </div>
            
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center h-[80px] w-full gap-[4%] mb-[2rem]">
                
                <div className="w-full mt-[2rem] md:mt-0 h-[4rem] relative flex justify-center items-center ">

                    <div className="range__slider w-full h-[1.4rem] rounded-lg overflow-hidden">
                        <div className="range__slider-line w-full h-[70px] bg-white " style={{ width: `${progress2}%` }}>
                        </div>
                    </div>

                    <div className="range__thumb w-[4%] md:w-[1.6%] " style={{ left: `${window.innerWidth < 768? (progress2-3):(progress2-0.5)}%` }}>
                        <div className="range__value  ">
                            <span className="range__value-number font-Gilroy text-sm font-normal text-white">{progress2}</span>
                        </div>
                    </div>

                    <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress2}
                    step="1"
                    onChange={handleChange2}
                    className="second-range__input"
                    />
                </div>
            </div>
            
            <div className='font-Gilroy font-normal text-2xl mb-[2rem] text-white'>
                You have the potential to <span className='text-[#C30010] font-Gilroy font-bold text-2xl'>earn</span> an additional <span className='text-[#C30010] font-Gilroy font-bold text-2xl'>₹{calculationFunc()}</span> !
                <div className="font-Gilroy text-sm text-white pt-2">*Based on estimates that 1% to 5% of your followers make direct purchases from your store.</div>
            </div>
        </div>

        <div className='p-8 pt-20 flex flex-col justify-center items-center'>
            <div className='font-Gilroy font-semibold text-3xl md:text-3xl lg:text-5xl text-centre text-white'>Wait, we have<span className='text-[#C30010]'> more to offer!!</span></div>
            <div className='flex flex-col j ustify-center md:flex-row overflow-x-hidden'>
                <div className='flex flex-col md:flex-row w-[86%] justify-center items-center mx-auto pt-10' data-aos="fade-right">  
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1722935689/Website_Revamp/Group_1171277259_f5u0ne_ohigx9.webp' alt='unlocked' className='w-[96%]'/>
                            <div className='pt-5 font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Brand</div>
                            <div className='font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Collaboration</div>
                        </div>                  
                    </div>
                    <div class='flex justify-center items-center max-[768px]:pt-6'>
                        <div class='flex flex-col items-center justify-center'>
                            <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1722935864/Website_Revamp/Group_1171277254_gh3zdx_ud6hxy.webp' alt='unlocked' className='w-[96%]'/>
                            <div  className='pt-5 font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Creators</div>
                            <div className='font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Community</div> 
                        </div>                                
                    </div>
                </div>
                <div class='flex flex-col md:flex-row w-[86%] justify-center items-center mx-auto gap-5 pt-10' data-aos="fade-left">      
                    <div class='flex justify-center items-center'>
                        <div class='flex flex-col items-center justify-center'>
                            <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1722936013/Website_Revamp/Group_1171277253_siji10_wc1f0m.webp' alt='unlocked' className='pl-3'/>
                            <div  className='pt-6 font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Monetize</div>
                            <div className='font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Your Content</div>
                        </div>
                    </div>
                    <div class='flex justify-center items-center'>
                        <div class='flex flex-col items-center justify-center'>
                            <img src='https://res.cloudinary.com/dapbrn8a9/image/upload/v1722936091/Website_Revamp/Group_1171277260_1_ds7z16_f50cq0.webp' alt='unlocked'/>
                            <div  className='pt-6 font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Automate</div>
                            <div className='font-Gilroy font-medium text-xl md:text-md lg:text-lg font-[#3D3D3D]'>Content Promotion</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Unlock
