import { motion } from 'framer-motion';
import { AppImages } from '../Constants/images';
import useLayout from '../hooks/useLayout';
import { useLocation } from 'react-router-dom';

const TopSlider = props => {

  const { currentState } = useLayout();
  const location = useLocation();

  const page = AppImages[location.pathname.replace(/\//g, '')];

  return (
    <>
        <div className={`relative h-full w-full overflow-hidden flex ${currentState.topsliderArrangement.className}`}>

            <motion.div 
                initial={currentState.topsliderCover.initial}
                animate={{ ...currentState.topsliderCover.animate, transition: { delay: 1, duration: 0.5 } }}
                exit={{ ...currentState.topsliderCover.exit, transition: { duration: 0.5, } }}
                style={{ backgroundColor: `${page?.slideColor}` }}
                className={`absolute drop-shadow-lg z-10 ${currentState.topsliderCover.className}`}>
                  {/* <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3, duration: 0.5 } }}
                    exit={{ opacity: 0 }}
                    className={`border border-gray-600 bg-antique ${currentState.topsliderCoverHline.className}`}></motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3, duration: 0.5 } }}
                    exit={{ opacity: 0 }}
                    className={`border border-gray-600 bg-antique ${currentState.topsliderCoverVline.className}`}></motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3, duration: 0.5 } }}
                    exit={{ opacity: 0 }}
                    className={`border border-gray-600 ${currentState.topsliderCoverHline.className}`}></motion.div> */}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, backgroundImage: 'none' }}
              animate={{ opacity: 1, backgroundImage: `url(${page?.image})`, transition: { delay: 1.5, duration: 1 } }}
              style={{backgroundColor: `${page?.slideColor}`, backgroundPosition: `${page?.imagePosition}`, backgroundSize: 'cover' }}
              exit={{ opacity: 0, backgroundImage: 'inherit', transition: { duration: 1 } }}
              className={`relative headerbox z-20 ${currentState.topsliderBg.className}`}>
              </motion.div>
            <div className={`overflow-y-auto p-4 ${currentState.topsliderChildren.className}`}>
                {props.children}
            </div>
        </div>
    </>
  )
}

export default TopSlider
