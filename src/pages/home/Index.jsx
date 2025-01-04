import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className='flex flex-col'>
        <h1 className='text-8xl text-white bg-red-600 p-9 font-serif'>Fundraiser</h1>
        <Link to="/buy" className='bg-[#28282b] text-white self-center my-5 px-5 py-1 rounded-lg'>Go donate</Link>
    </div>
  )
}

export default Index