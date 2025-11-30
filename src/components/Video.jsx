import React from 'react'

const Video = () => {
  return (
    <section className='grid min-h-screen text-white'>
      <div className='grid grid-rows min-h-screen w-full justify-center items-center pt-15'>
        <div></div>
        <div className='flex flex-row w-355 h-full ml-18 p-2 overflow-y-visible'>
          <div className='grid grid-cols-[1fr_1fr_1fr] w-full'>
            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2  h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'><img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_1.png" alt="" /></div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt="" />
                <div className='text-sm mx-5 flex items-center text-white'>
                  Hidden UI Designs about layouts <br />
                  957K • 8 months ago
                </div>

                <div className='flex flex-col w-30 items-end  ml-7 text-sm  text-white'>
                  <img className='w-4 mr-10' src="src/assets/logo.svg" alt="" />
                  Sketch Minds
                </div>
              </div>
            </div>
            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_2.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  A quick tour through a Night city <br />
                  1.8M • 1 year ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-10' src="src/assets/logo.svg" alt='' />
                  Pixel Voyage
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_3.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  Street Noodels in just 5 minutes <br />
                  3.2M • 3 years ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-7' src="src/assets/logo.svg" alt='' />
                  Chef Nova
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_4.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  beginners mistake crashing your app <br />
                  412K • 6 months ago
                </div>
                <div className='flex flex-col w-30 items-end text-sm text-white'>
                  <img className='w-4 mr-5' src="src/assets/logo.svg" alt='' />
                  DevOps
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_5.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  A cloud timelapse from the Himalayas <br />
                  2.6M • 4 years ago
                </div>
                <div className='flex flex-col w-30 items-end text-sm text-white'>
                  <img className='w-4 mr-6' src="src/assets/logo.svg" alt='' />
                  Zen Shift
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_6.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  The true sound of productivity <br />
                  677K • 2 years ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-10' src="src/assets/logo.svg" alt='' />
                  Key Chronical
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_7.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  Beginner Photography Mistakes <br />
                  1.1M • 11 months ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-10' src="src/assets/logo.svg" alt='' />
                  Frame Theory
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_8.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  Is Cybersecurity Hard? Not anymore <br />
                  899K • 3 years ago
                </div>
                <div className='flex flex-col w-30 items-end text-sm text-white'>
                  <img className='w-4 mr-7' src="src/assets/logo.svg" alt='' />
                  Zero Trace
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_9.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-2 flex items-center text-white'>
                  painting Mythical Creatures Timelaps <br />
                  526K • 1 month ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-5' src="src/assets/logo.svg" alt='' />
                  Art Forge
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_10.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  The EV That Shocked Everyone <br />
                  4.4M • 2 years ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-10' src="src/assets/logo.svg" alt='' />
                  AutoLogic Lab
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_11.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white '>
                  Football Tricks You Can Learn Fast <br />
                  294K • 7 months ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-10' src="src/assets/logo.svg" alt='' />
                  Skill Sphere
                </div>
              </div>
            </div>

            <div className='flex flex-col bg-white/5 backdrop-blur-3xl m-2 h-75 rounded-xl hover:scale-102 transition-all cursor-pointer'>
              <div className='bg-amber-100 h-60 rounded-sm'>
                <img className='h-60 rounded-sm w-full' src="src/assets/thumbnails/thumb_12.png" alt="" />
              </div>
              <div className='flex relative w-full text-3xl items-center my-2 text-white'>
                <img className='h-7 flex pl-5' src="src/assets/save_icon.svg" alt='' />
                <div className='text-sm mx-5 flex items-center text-white'>
                  Cool setups that help productivity <br />
                  1.7M • 5 years ago
                </div>
                <div className='flex flex-col w-30 items-end ml-7 text-sm text-white'>
                  <img className='w-4 mr-10' src="src/assets/logo.svg" alt='' />
                  Desk Culture
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
