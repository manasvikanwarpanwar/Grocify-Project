import React from 'react'
import fruits from '../../assets/fresh-fruits.png'
import Button from "../Button/Button";

const Discount = () => {
  return (
    <section className='bg-zinc-100' style={{backgroundImage:`url(${fruits})`}}>
        <div className=' flex max-w-1400px mx-auto px-10 py-10'>
            <span className='text-9xl text-orange-500 font-bold transform -rotate-90 h-fit self-center '>
                20%
            </span>
            <div className='max-w-[700px] ' >
                <h3 className='text-7xl text-zinc-800 font-bold'>First Order Discount!</h3>
                <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery website! shop fresh essential and save big on your first purchas.Fast delivery and quality guaranteed </p>
                <Button content="Get a Discount"/>
            </div>

        </div>
    </section>
  )
}

export default Discount;

