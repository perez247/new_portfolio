import React from 'react';
import { motion, useAnimate } from 'framer-motion';
import { useSelector } from 'react-redux';

const AnimateBottomLine = props => {
    
    const [lineScope, animateLine] = useAnimate();
    const {isMobile} = useSelector(s => s.layout);

    const onHoverhandler = async () => {
        await animateLine(lineScope.current, { width: '100%' }, { delay: 0 }, { duration: 0.5 });
    }

    const onLeavehandler = async () => {
        await animateLine(lineScope.current, { width: '0%' }, { delay: 0 }, { duration: 0.5 });
    }

  return (
    <div 
        onMouseEnter={onHoverhandler}
        onMouseLeave={onLeavehandler}
    className=' relative'>
      {props.children}
      <motion.hr  
        ref={lineScope}
        initial={{ width: '0%' }}
        className='border-b-2 border-b-appRed absolute -bottom-4' />
    </div>
  )
}

export default AnimateBottomLine
