import React from 'react'
import CAtegorypage from '../Cateogarypage/CAtegorypage'
import BgALL from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
         <CAtegorypage title="All Products" bgImage={BgALL} categories={'All'}/>
    </div>
  )
}

export default AllProducts
