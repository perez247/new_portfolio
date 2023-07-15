import React from 'react'
import LineSvg from '../../Components/SVG/LineSvg'

const About = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='text-center w-full mx-w-[60vw] text-secondary'>
        <div className="relative">
          <LineSvg className={`left-0 right-0 -top-10 m-auto absolute w-[10em]`} />
          <p className='text-secondary container m-auto md:max-w-[90%] lg:max-w-[60%]'>
            I am a Developer with a keen interest in both front-end, back-end, and DevOp technologies. I
            love listening to pop music, playing chess, and reading manga. I am always curious to learn more.
          </p>
          <LineSvg className={`left-0 right-0 m-auto -bottom-10 absolute w-[10em] rotate-180`} />
        </div>
      </div>
    </div>
  )
}

export default About
