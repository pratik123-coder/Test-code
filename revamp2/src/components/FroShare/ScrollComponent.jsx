import React from 'react'
import PC from './PC.jsx'; 
import SM from './SM.jsx';

function ScrollComponent() {
  return (
    <div>
      <div className="hidden lg:block bg-black border border-black">
        <PC/> 
      </div>
      <div className="block lg:hidden bg-black">
        <SM/>
      </div>
    </div>

  )
}

export default ScrollComponent
