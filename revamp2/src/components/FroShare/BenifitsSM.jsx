import React from 'react';

const BenifitsSM = React.memo(() => {
  return (
    <div className='w-full h-full flex flex-col justify-between items-center bg-black'>
      <div className='text-white font-Gilroy font-bold text-2xl md:text-3xl pt-6'>
        Benefits of a
      </div>
      <div className='text-white font-Gilroy font-bold text-2xl md:text-3xl'>
        Froshare Affiliate
      </div>
      <div className='font-Gilroy font-medium text-xl md:text-2xl text-white pt-3'>
        Unlock Your Revenue Streams
      </div>
      <div className="w-[80%] m-4 flex flex-col justify-center items-center border-[1px] border-white shadow-[5px_5px_0_0_#ffffff] shadow-red p-4 rounded-2xl bg-[#C30010]">
        <div className='w-1/2 h-1/2'>
          <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722952253/Website_Revamp/CoinWallet_yhyv7v_aas8by.png'} alt="CoinWallet" loading="lazy" />
        </div>
        <div className='text-white w-full pl-4 pr-4 flex flex-start font-Gilroy font-bold text-xl'>
          #1- Make <br /> Simplify Recommendations!
        </div>
        <div className='text-[#e0e0e0] pl-4 pr-4 font-Gilroy font-normal text-md'>
          Customize your product recommendations effortlessly using <span className='text-[#ffffff] font-bold'>Auto links, Direct messages, and Auto-Reply</span> to connect personally with your audience.
        </div>
      </div>
      <div className="w-[80%] m-4 flex flex-col justify-center items-center border-[1px] border-white shadow-[5px_5px_0_0_#ffffff] shadow-red p-4 rounded-2xl bg-[#C30010]">
        <div className='w-1/2 h-1/2'>
          <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722952655/Website_Revamp/Add_New_hze8hi_l7chza.webp'} alt="CoinWallet" loading="lazy" />
        </div>
        <div className='text-[#ffffff] w-full pl-4 pr-4 flex flex-start font-Gilroy font-bold text-xl'>
          #2 - Hunting for Brands?
        </div>
        <div className='text-[#e0e0e0] pl-4 pr-4 font-Gilroy font-normal text-md'>
          <span className='text-[#ffffff] font-bold'>One-Stop Brand Hub,</span> with Multiple Brands, From established Favorites to Emerging Gems. Unlock <span className='text-[#ffffff] font-bold'>Incredible collaboration Opportunity,</span> All in One Place!
        </div>
      </div>
      <div className="w-[80%] m-4 flex flex-col justify-center items-center border-[1px] border-white shadow-[5px_5px_0_0_#ffffff] shadow-red p-4 rounded-2xl bg-[#C30010]">
        <div className='w-1/2 h-1/2'>
          <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722952728/Website_Revamp/NFT_wrktr1_z4et0f.webp'} alt="CoinWallet" loading="lazy" />
        </div>
        <div className='text-white w-full pl-4 pr-4 flex flex-start font-Gilroy font-bold text-xl'>
          #3 - Earn Big!
        </div>
        <div className='text-[#e0e0e0] w-full pl-4 pr-4 font-Gilroy font-normal text-md'>
          Your effort equals money!
        </div>
        <div className='text-[#e0e0e0] w-full pl-4 pr-4 font-Gilroy font-normal text-md'>
          Receive <span className='text-[#ffffff] font-bold'> commission for every sale</span> you generate.
        </div>
      </div>
      <div className="w-[80%] m-4 flex flex-col justify-center items-center border-[1px] border-white shadow-[5px_5px_0_0_#ffffff] shadow-red p-4 rounded-2xl bg-[#C30010]">
        <div className='w-1/2 h-1/2'>
          <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722952801/Website_Revamp/Sell_g1xve4_1_w3wvki.webp'} alt="CoinWallet" loading="lazy" />
        </div>
        <div className='text-[#ffffff] w-full pl-4 pr-4 flex flex-start font-Gilroy font-bold text-xl'>
          #4 - Get Detailed Analytics!
        </div>
        <div className='text-[#e0e0e0] pl-4 pr-4 font-Gilroy font-normal text-md'>
          We'll <span className='text-[#ffffff] font-bold'>handle the complicated calculations;</span> you just focus on the numbers that count!"
        </div>
      </div>
    </div>
  );
});

export default BenifitsSM;
