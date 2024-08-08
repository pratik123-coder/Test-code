import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger }  from 'gsap/ScrollTrigger';
import { data } from '../../data/scrolldata';
import { DetailsCard } from './DetailCard';

gsap.registerPlugin(ScrollTrigger);

const IMAGE_ASPECT_RATIO = 0.339 / 0.54;

const PC = React.memo(() => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '.rightblock',
        markers: false,
      },
    });

    gsap.set('.photo', { opacity: 0, x: '100%', zIndex: 2 });
    gsap.set('.photo:first-child', { opacity: 1, x: '0%', zIndex: 2 });

    data.forEach((_, index) => {
      tl.to(`.photo:nth-child(${index + 1})`, {
        opacity: 1,
        x: '0%',
        duration: 1,
        onStart: () => {
          if (index > 0) {
            gsap.set(`.photo:nth-child(${index})`, { zIndex: 1 });
          }
        },
        onComplete: () => {
          gsap.set(`.photo:nth-child(${index + 1})`, { zIndex: 2 });
        },
      });
      if (index < data.length - 1) {
        tl.to(`.photo:nth-child(${index + 2})`, {
          opacity: 0,
          x: '-100%',
          duration: 2,
        });
      }
    });

    return () => tl.kill();
  }, []);

  return (
    <>
      <div className='header w-full items-center justify-center flex flex-col h-[20vh] space-y-4 mt-[5rem] bg-black border border-black '>
        <span className='text-6xl font-bold text-red-600'>
          Let’s set you up !!
        </span>
        <span className='text-2xl font-medium text-white'>
          Step by step guide to get started
        </span>
      </div>
        <div className='gallery flex'>

          <div className='w-1/2'>
            <div className='flex flex-col w-full text-white text-3xl font-semibold pl-[6rem]'>
              {data.map((item, index) => (
                <DetailsCard item={item} key={index} />
              ))}
            </div>
          </div>

          <div className='rightblock w-1/2 h-screen flex flex-col justify-center items-center'>
            <div className='w-full h-screen flex justify-center items-center'>
              <div className='imgContainer relative w-[60%] h-3/4 rounded-2xl overflow-hidden bg-black  '>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className='photo absolute w-full flex justify-center items-end h-full pt-14 ml-3'
                  >
                    <img
                      src={item.image}
                      className={`h-full aspect-[${IMAGE_ASPECT_RATIO}] object-contain items-end`}
                      alt='creator images'
                    />
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
});

export default PC;
