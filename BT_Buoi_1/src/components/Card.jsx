import React from 'react'

const Card = () => {
  return (
    <div className='w-80 h-110 border-5 border-indigo-600 flex flex-col justify-between'>
      <div className='bg-gray-400 w-full h-40 flex justify-center items-center'>
        <p className='text-center text-3xl text-gray-300'>500 x 325</p>
      </div>
      <div>
        <h3 className='text-center font-bold text-3xl py-4'>Card title</h3>
        <p className='text-center py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos qui nemo.</p>
      </div>
      <div className='w-full h-auto bg-gray-100 flex justify-center items-center py-2'>
        <button className='text-white bg-blue-500 px-4 py-2 rounded'>Find Out More!</button>
      </div>
    </div>
  )
}

export default Card
