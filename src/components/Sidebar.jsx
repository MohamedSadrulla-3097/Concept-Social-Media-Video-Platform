import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-linear-to-t from-[#1C1924] via-[#1E212A] to-[#1C272A] grid justify-center items-center fixed min-h-screen mt-15 w-17 rounded-lg ml-1'>
      <div className='flex flex-col justify-start items-center w-full h-full gap-5 mt-3'>
        <div className='transition-all flex flex-col justify-center items-center'>
          <img className='w-5 mt-2' src="/icons/home_icon.svg" alt="" />
          <p className='mt-2 text-xs font-semibold text-white'>Home</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-5 mt-2' src="/icons/tape_icon.svg" alt="" />
          <p className='mt-2 text-xs font-semibold text-white'>Tape</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-5 mt-2' src="/icons/fans_icon.svg" alt="" />
          <p className='mt-2 text-xs font-semibold text-white'>Fans</p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-full'>
        <img className='w-5 mt-40' src="/icons/settings_icon.svg" alt="" />
      </div>
    </div>
  )
}

export default Sidebar
