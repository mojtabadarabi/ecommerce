import React from 'react'

export default function ProductInfo() {
  return (
    <div className='flex flex-col gap-8'>
        <h1 className='text-2xl font-medium my-6'>Technical Details</h1>
        <div className='flex gap-3'>
            <span className='text-gray md:w-[300px] w-[100px] text-md font-bold'>Display</span>
            <span className='flex-1 text-md'>13.3-inch (diagonal) LED-backlit display with IPS technology</span>
        </div>
        <div className='flex gap-3'>
            <span className='text-gray md:w-[300px] w-[100px] text-md font-bold'>Graphics</span>
            <span className='flex-1 text-md'>Apple 10-core GPU</span>
        </div>
        <div className='flex gap-3'>
            <span className='text-gray md:w-[300px] w-[100px] text-md font-bold'>Processor</span>
            <span className='flex-1 text-md'>Apple M2 chip</span>
        </div>
        <div className='flex gap-3'>
            <span className='text-gray md:w-[300px] w-[100px] text-md font-bold'>In the box</span>
            <span className='flex-1 text-md'>67W USB-C Power Adapter, USB-C Charge Cable (2 m)</span>
        </div>
        <div className='flex gap-3'>
            <span className='text-gray md:w-[300px] w-[100px] text-md font-bold'>Height</span>
            <span className='flex-1 text-md'>0.61 inch (1.56 cm)</span>
        </div>
        <div className='flex gap-3'>
            <span className='text-gray md:w-[300px] w-[100px] text-md font-bold'>Width</span>
            <span className='flex-1 text-md'>11.97 inches (30.41 cm)</span>
        </div>
        <span className='text-primary text-sm'>Show more </span>
    </div>
  )
}
