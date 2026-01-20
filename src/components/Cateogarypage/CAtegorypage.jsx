import React from 'react'
import Bannner from '../Banner/Bannner'
import Productlist from '../Productlist/Productlist'
import Cards from '../Cards/Cards'
const CAtegorypage = ({title,bgImage,categories=[]}) => {
  let filterdItems = categories.includes('All')?Productlist:Productlist.filter(item=> categories.includes(item.category))
    const renderProduct = filterdItems.map(product=>{
        return(
            <Cards image={product.image} name={product.name} price={product.price}/>
        )
    }) 
  return (
    <div>
      <Bannner title={title} bgImage={bgImage}/>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10 '>
        {renderProduct}
      </div>
    </div>
  )
}

export default CAtegorypage
