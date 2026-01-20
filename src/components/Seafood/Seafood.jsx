import React from 'react'
import CAtegorypage from '../Cateogarypage/CAtegorypage'
import BgseaFood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <CAtegorypage title="Meat & Seafood" bgImage={BgseaFood} categories={['Seafood','Meat']}/>
     </div>
  )
}

export default Seafood
