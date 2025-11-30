import React from 'react'

const navbar = () => {
  return (
    <div className='flex fixed min-w-screen justify-center items-center backdrop-blur-sm text-white z-10'>
      <div className='grid grid-cols-[1fr_1fr_1fr] bg-linear-to-r from-[#1C1924] via-[#1E212A] to-[#1C272A] w-full h-12 justify-center items-center rounded-sm'>
        <div className='flex justify-start items-center'>
          <img className='my-2 mx-4 w-5' src="src/assets/burger_menu.svg" alt="" />
          <img className='my-2 ml-7  w-5' src="src/assets/logo.svg" alt="" />
          <img className='my-2 mx-2' src="src/assets/logo_name.svg" alt="" />
        </div>
        <div className='flex justify-center items-center h-full'>
          <div className='flex w-full justify-between'>
            <div className='w-full flex items-center justify-between h-9 bg-[#3D464D] px-1 rounded-full border-none text-sm'>
              <input className='flex h-8 w-full px-5 justify-center items-center rounded-2xl' type="search" id='search' placeholder='Search' />
              <button className='flex h-7 items-center relative z-10 justify-center'>
                <img className='h-8' src="src/assets/search_icon.svg" alt="" />
              </button>
            </div>
          </div>
          <a className='flex items-center w-8 ml-1' href=""><img src="src/assets/mic_icon.svg" alt="" /><input type="text" id='voiceInput' /></a>
        </div>
        <div className='flex justify-end px-20 h-7'>
          <div className='flex gap-x-6 justify-center items-center'>
            <img className='h-5' src="src/assets/create_icon.svg" alt="" />
            <img className='h-5' src="src/assets/notification_icon.svg" alt="" />
            <img className='h-6' src="src/assets/profile_icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
