import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import '../../styles/Faq.css';

const faqData = [
  {
    question: 'Who can join Froshare platform?',
    answer: 'Anyone eager to enhance their social media presence and income can join Froshare! Whether you are a creator aiming to amplify your influence and earnings, an affiliate partner seeking to expand your brand network and simplify link sharing, or simply interested in exploring affiliate marketing and collaborating with top brands.',
  },
  {
    question: 'How can I check brands and commission rates available on Froshare?',
    answer: 'Discover a world of options on Froker platform! Explore the Brands section in your profile to browse through a plethora of brands and their associated commissions. Do not wait – start collaborating and earning today! Dive into Froker app now!',
  },
  {
    question: 'How can I track my commissions and when will I get paid?',
    answer: 'With Froshare, simply log into your dashboard to monitor commissions and analyze followers purchases. When you are ready, redeem earnings with a single click. Your earnings will be credited to your linked bank account within 2-3 business days',
  },
  {
    question: 'What if there is an issue with your order?',
    answer: 'Froker is a community of trusted brands and businesses. Our dedicated customer support team is here to swiftly resolve any concerns you may have. Promote with confidence, knowing we have got your back!',
  },
  {
    question: 'Will I receive any brand collaboration opportunities?',
    answer: 'Yes, Froshare offers brand collaboration opportunities based on creators profiles and engagement metrics.',
  },
  {
    question: 'I am eager to know if I will receive any sourcing opportunities and how it all works?',
    answer: 'Sourcing depends on the brand preferences and your profile. Find details in the "Details" section after selecting brand products from your dashboard. Remember, sourcing details are subject to each brands terms and conditions.',
  },
  {
    question: 'Will my Instagram account be permanently linked to Froshare?',
    answer: 'Your Instagram account remains linked to Froshare as long as you choose to utilize our services. You have the freedom to unlink it whenever you wish.',
  },
  {
    question: 'Still have questions?',
    answer: 'Feel free to reach out to our team at social@froker.in. We are here to provide answers and support every step of the way!',
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center pt-10 relative bg-black'>
      <div className='flex flex-col-reverse md:flex-row justify-center items-center w-full md:w-[80%] xl:w-[40%] '>
          
        <div className='text-white font-Gilroy font-bold text-3xl flex justify-center items-center md:mt-10 md:mb-10 text-center'>Frequently Asked Questions</div>

        <div className='w-[40%] md:w-[30%] flex justify-center items-center'>
            <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722940245/Website_Revamp/Untitled_design_-_2024-03-20T121153_1_xussyt_pqkzya.webp'} alt='img of faqs'/>
        </div>

      </div>

      {faqData.map((faq, index) => (
      <div key={index} className={`cursor-pointer faq-container  w-[90%] md:w-[55%] ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
          <div key={index} className={` faq ${activeIndex === index ? 'active' : ''}`}>
            <h3 className='faq-title font-medium font-Gilroy text-lg text-white'>{faq.question}</h3>
            <p className='faq-text font-normal font-Gilroy2 text-lg text-white'>{faq.answer}</p>
            <button className='faq-toggle bg-' onClick={() => toggleFaq(index)}>
              <FaAngleRight color={`${activeIndex === index ? '#ffffff' : '#ffff'}`} className={` dark:text-[#C30010]${
                  activeIndex === index ? 'transform rotate-90' : ''}`}/>
            </button>
          </div>
      </div>
      ))}
      <div className='hidden lg:block absolute top-[30%] w-[18%] lg:left-6 xl:w-50 xl:left-14'>
        <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1722941900/Website_Revamp/Untitled_design_-_2024-03-21T154707_1_yxtlfh_oz2qyw.webp'} alt='question person'/>
      </div>
    </div> 
  );
}

export default Faq;
