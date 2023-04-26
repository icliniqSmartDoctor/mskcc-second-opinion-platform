import React from 'react'

function Breadcrumb() {
  return (
    <>
      <div className='container-alternate mx-auto h-full pt-28'>
        <div className='block md:flex items-center justify-between'>
          <div className='mb-5'>
            <p className="text-lg pb-15 text-gray-600 font-medium">We are here to care for you.</p>
            <h1 className='mt-5 font-semibold text-3xl md:text-6xl '>About MSK</h1>
          </div>
          <div className=' font-medium '>
            <a className='text-gray-400 mr-2'>Home</a> 
            <span className=' mr-2 text-gray-400 '>|</span>
            <a className='text-primary mr-2'>About</a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Breadcrumb