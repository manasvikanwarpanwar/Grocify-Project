import React from 'react'
import CAtegorypage from '../Cateogarypage/CAtegorypage'
import BgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
          <CAtegorypage title="Dairy & Eggs" bgImage={BgDairy} categories={'Dairy'}/>
    </div>
  )
}

export default Dairy
