import React from 'react';

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src="https://res.cloudinary.com/dapbrn8a9/video/upload/v1723024064/Website_Revamp/Effects_website_ok_1_okaet2.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col h-full text-white">
        <div className="flex flex-col pt-48 lg:pt-36 items-center flex-grow">
          <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1723023394/Website_Revamp/Group_1171278403_yhylmt.webp" alt="" className='md:h-48 px-5 lg:px-0 h-32 min-w-28 animate-fadeInUp' />
          <p className="text-center text-4xl  pb-5 animate-fadeInUp">Start Your Challenges Now!</p>
          <div className='flex gap-y-3 bg-[rgba(0,0,0,0.25)] px-5 py-3 rounded-full border-1 md:hidden'>
            <button
              class="animate-fadeInUp relative py-2 px-8 text-black text-base font-semibold  overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[rgba(0,0,0,0.25)] before:to-red-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              Download Now
            </button>
            <img src="" alt="" className='' />
            <img src="" alt="" className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
