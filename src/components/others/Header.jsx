// import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end p-10 justify-between'>
        <h1 className='text-2xl  font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Prija 👋</span></h1>
        <button className='bg-purple-400 text-white px-5 rounded-lg  text-xl py-2'>Log Out</button>
    </div>
  )
}

export default Header