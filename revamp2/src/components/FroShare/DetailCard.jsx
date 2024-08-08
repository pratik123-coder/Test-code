import React from 'react'

export const  DetailsCard = ({ item }) => {
  return (
    <div className='w-2/3 mx-auto h-screen flex justify-center items-start flex-col space-y-4 '>
      <span className='px-5 py-2 bg-red-600 text-white text-3xl'>
        [ {item.count} ]
      </span>
      <span className='text-white text-3xl ' >{item.heading}</span>
      <span className='text-white text-2xl font-normal'>
        {item.description}
      </span>
    </div>  );
};
