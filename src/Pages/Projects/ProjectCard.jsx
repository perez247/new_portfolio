import React, { useCallback } from 'react'
import LineSvg from '../../Components/SVG/LineSvg'
import { useAnimate } from 'framer-motion'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const ProjectCard = props => {
    const [scope, animate] = useAnimate();
    const [lineScope, animateLine] = useAnimate();

    const {isMobile} = useSelector(s => s.layout);

    const onHoverhandler = async () => {
        if (isMobile) { return }
        await animate(scope.current, { opacity: 1, bottom: [25, 35]  }, { delay: 0 }, { duration: 0.5 });
        await animateLine(lineScope.current, { width: '100%' }, { delay: 0 }, { duration: 0.5 });
    }

    const onLeavehandler = async () => {
        if (isMobile) { return }
        await animate(scope.current, { opacity: 0, bottom: 25  }, { delay: 0 }, { duration: 0.5 });
        await animateLine(lineScope.current, { width: '0%' }, { delay: 0 }, { duration: 0.5 });
    }

  return (
    <div 
        onMouseEnter={onHoverhandler}
        onMouseLeave={onLeavehandler}
    className="relative my-10 lg:border lg:hover:border-appGrey2 py-2">
        <div className="absolute w-full h-full pointer-events-none  z-[10]"></div>
        <a href={`${props.project.url}`} target="_blank" rel="noopener noreferrer">
            <LineSvg className={`m-auto w-[10em]`} />
            <div className='w-full flex justify-center items-center py-2'>
                <div className='w-1/3 flex justify-center'>
                    <div 
                        style={{ backgroundColor: `${props.project.logoBgColor}` }}
                        className='m-auto text-center p-4 vbox'>
                        <img src={props.project.logo} alt={props.project.name} className=' w-14' />

                        <div className='vbox__horizontal'></div>
                        <div className='vbox__vertical'></div>
                    </div>
                </div>
                <div className='w-full p-4 realtive'>
                    <p className=' text-lg font-bold'>{props.project.name}</p>
                    <p className='text-sm' >{props.project.description}</p>
                    
                    <motion.p 
                    ref={scope} 
                    initial={{ opacity: isMobile ? 1 : 0 }}
                    className=' text-appRed absolute text-xs flex justify-start items-center gap-1'>
                        Visit
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <motion.hr  
                            ref={lineScope}
                            initial={{ width: isMobile ? '100%' : '0%' }}
                            className='border-b border-b-appRed absolute bottom-0' />
                    </motion.p>
                </div>
            </div>
            <LineSvg className={`m-auto w-[10em] rotate-180`} />
        </a>
    </div>
  )
}

export default ProjectCard
