import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

const MenuSvg = () => {

  const [isOpen, setOpen] = useState(false);

  const hoverHandler = () => {
    setOpen(true);
  }

  const leaveHandler = () => {
    setOpen(false);
  }

  return (
    <>
      <span 
        onMouseEnter={hoverHandler}
        onMouseLeave={leaveHandler}
      className='w-full h-full inline-block absolute z-10'></span>
        <Hamburger 
          toggled={isOpen} toggle={setOpen}
          color='#000000'
          size={30}
          distance='sm'
        />
    </>
  )
}

export default MenuSvg
