import React from 'react'
import Elevate from '../../components/FroShare/Elevate'
import Benifits from '../../components/FroShare/Benifits'
import Unlock from '../../components/FroShare/Unlock'
import Brands from '../../components/FroShare/Brand'
import ScrollComponent from '../../components/FroShare/ScrollComponent'
import EarnbySharing from '../../components/FroShare/EarnBySharing'
import Faq from '../../components/FroShare/FAQ'

const FroSharePage = () => {
  return (
    <>
      <Elevate />
      <Benifits />
      <Unlock />
      <Brands />
      <ScrollComponent />
      <EarnbySharing />
      <Faq />
    </>
  )
}

export default FroSharePage