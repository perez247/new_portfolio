import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { layoutActions } from '../../Store/layoutSlice'
import AboutSvg from '../SVG/AboutSvg'
import WorkSvg from '../SVG/WorkSvg'
import ProjectsSvg from '../SVG/ProjectsSvg'
import ContactSvg from '../SVG/ContactSvg'
import LineSvg from '../SVG/LineSvg'
import AnimateBottomLine from '../Animations/AnimateBottomLine'
import { layoutStateConstant } from '../Constants/AppLayout'

const NavBar = props => {

    const dispatch = useDispatch();

    dispatch(layoutActions.setLayoutState(layoutStateConstant.getRandomState()));

  return (

    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1,
            transition: {delay: 0.5, duration: 0.5 }
        }}
        exit={{ 
            opacity: 0,
            transition: { delay: 0, duration: 0.5 }
         }}
        className={` flex flex-col justify-center items-center h-full w-full ${props.className} md:flex-row-reverse md:gap-20`}>
            <div className='relative text-center'>
                <p className='lg:border-b md:border-b-gray-400  pb-2 mb-1'>
                    Hi, I'm <br/>
                    Ariweriokuma Excellence Pere <br/>
                    A Full Stack Developer / DevOps Engineer
                </p>
                <p className="text-xs hidden lg:block italic">Each page layout may differ</p>
                <a 
                href="https://firebasestorage.googleapis.com/v0/b/ape-niche.appspot.com/o/cv%2Fa_excellence_pere_resume.pdf?alt=media&token=acc11024-8cf9-4da6-a1df-de1495fd35a5" target="_blank" rel="noopener noreferrer"
                className='text-sm text-appRed fixed bottom-5 left-5 flex md:absolute md:-bottom-10 md:left-0 cursor-pointer'>
                    Resume 
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                    </svg>
                </a>
            </div>
            <div className='relatvie'>
                <LineSvg className={`left-0 right-0 m-auto absolute w-[10em] md:static`} />
                <p className=' text-7xl lg:text-7xl my-10 lg:my-14 relative'>
                    <AnimateBottomLine>
                        <Link  to='/about'>
                            <AboutSvg animate={true} className={`w-44`} />
                        </Link>
                    </AnimateBottomLine>
                </p>
                <p className=' text-5xl lg:text-7xl my-10 lg:my-14 relative'>
                <AnimateBottomLine>
                    <Link to='/work'>
                        <WorkSvg animate={true} className={` w-44`} />
                    </Link>
                </AnimateBottomLine>
                </p>
                <p className=' text-5xl lg:text-7xl my-10 lg:my-14 relative'>
                <AnimateBottomLine>
                    <Link to='/projects'>
                        <ProjectsSvg animate={true} className={` w-44`} />
                    </Link>
                </AnimateBottomLine>
                </p>
                <p className=' text-5xl lg:text-7xl mt-10 mb-5 lg:my-14 relative'>
                <AnimateBottomLine>
                    <Link to='/contact'>
                        <ContactSvg animate={true} className={` w-44`} />
                    </Link>
                </AnimateBottomLine>
                </p>
                <LineSvg className={`left-0 right-0 m-auto absolute w-[10em] rotate-180 md:static`} />
            </div>
        </motion.div>

  )
}

export default NavBar
