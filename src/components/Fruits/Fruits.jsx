import React from 'react'
import CAtegorypage from '../Cateogarypage/CAtegorypage'
import bgFruits from '../../assets/Fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
    <CAtegorypage title="Fruits & Veggies" bgImage={bgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits
