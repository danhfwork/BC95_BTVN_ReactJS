import React from 'react'

const Card = () => {
  return (
    <div class="relative bg-white p-8 rounded-lg shadow-md max-w-sm w-full mx-4">
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 p-6 rounded-2xl shadow-lg flex items-center justify-center">
          <img className='w-10 h-10' src="/img/snowflake.png" alt="" />
        </div>
        <div class="mt-16 text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 leading-tight mb-4 uppercase">
                Snow card title
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi repellendus voluptas deleniti id dolorum porro perspiciatis explicabo neque numquam.
            </p>
        </div>
    </div>
  )
}

export default Card
