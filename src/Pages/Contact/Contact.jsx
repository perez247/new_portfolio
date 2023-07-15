import React from 'react'
import LineSvg from '../../Components/SVG/LineSvg'

const Contact = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-secondary'>
      <div className='text-center w-full max-w-[90vw]'>
        <div className=" relative w-full">
            <LineSvg className={`left-0 right-0 -top-10 m-auto absolute w-[10em]`} />
            <div className='w-full'>
              <p className=' text-lg font-bold'>Email:</p>
              <a className=' text-appRed' href='mailto:hello@aepere.space' target="_blank" rel="noopener noreferrer">hello@aepere.space</a>
            </div>
            <div className='w-full mt-10'>
              <p className=' text-lg font-bold'>Social Media:</p>
              <div>
              <a className=' text-appRed' href='https://www.linkedin.com/in/excellence-ariweriokuma-69261997/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <LineSvg className={`left-0 right-0 m-auto -bottom-10 absolute w-[10em] rotate-180`} />
        </div>
      </div>
    </div>
  )
}

export default Contact
