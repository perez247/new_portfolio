import React from 'react'
import useLayout from '../hooks/useLayout';
import NavBarSVG from '../../Components/SVG/NavBarSVG';
import MenuSvg from '../../Components/SVG/MenuSvg';
import TopSlider from '../../Components/Animations/TopSlider';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavAnimate = props => {
    const { currentState } = useLayout();
    return (
        <div className={`w-screen h-screen overflow-auto font-body flex ${currentState.appArrangement.className}`}>
        
            <motion.div 
                initial={currentState.appTitle.close}
                animate={{ ...currentState.appTitle.open, transition: { delay: 0.5 , duration: 0.5 } }}
                exit={{ ...currentState.appTitle.close, transition: { delay: 0.5 , duration: 0.5 } }}
                className={`fixed bg-antique border border-appGrey2 flex z-30 items-center justify-start pl-24 md:pl-0 md:justify-center`}>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1.5 , duration: 0.5 } }}
                        exit={{ opacity: 0, transition: { delay: 0 , duration: 0.5 } }}
                    >
                        <NavBarSVG className={`w-44`} animate={false} />
                    </motion.p>
            </motion.div>

            <div className={`relative overflow-hidden ${currentState.appheader.className}`}>
                <motion.div 
                    initial={currentState.appMenuSvg.initial}
                    animate={{ ...currentState.appMenuSvg.animate, transition: { delay: 1.2, duration: 0.1, type: 'spring', damping: 12, stiffness: 100 } }}
                    exit={{ ...currentState.appMenuSvg.exit, transition: { delay: 0, duration: 0.5 } }}
                    className={`items-center h-20 w-20 rounded-full absolute z-40 cursor-pointer ${currentState.appMenuSvg.className}`} >
                        <Link to={'/'}>
                            <MenuSvg />
                        </Link>
                </motion.div>
            </div>

            <div className={` bg-antique ${currentState.appChildren.className}`}>
                <TopSlider>{props.children}</TopSlider>
            </div>

        </div>
    )
}

export default NavAnimate
