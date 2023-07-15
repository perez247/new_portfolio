import { AnimatePresence } from 'framer-motion';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppMenu from './Pages/AppMenu/AppMenu';
import Contact from './Pages/Contact/Contact';
import Work from './Pages/Work/Work';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import CheckMobile from './Components/Constants/CheckMobile';
import NavAnimate from './Components/Animations/NavAnimate';
import { motion } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
        <div className='noise'></div>
        {/* {showMenu && <div className='fixed h-screen w-screen top-0 left-0 bg-antique z-[60] pointer-events-none'></div>}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 3, duration: 0.1 } }}
        className='fixed h-screen w-screen top-0 left-0 bg-antique z-[70] pointer-events-none flex justify-center items-center'>
          <p className=' text-7xl'>Loading...</p>
        </motion.div> */}
        <CheckMobile />
        <motion.div
          className={` bg-antique font-body overflow-hidden`}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname} >
              <Route index element={<AppMenu />} />
              <Route path='/contact' element={<NavAnimate><Contact /></NavAnimate>} />
              <Route path='/work' element={<NavAnimate><Work /></NavAnimate>} />
              <Route path='/projects' element={<NavAnimate><Projects /></NavAnimate>} />
              <Route path='/about' element={<NavAnimate><About /></NavAnimate>} />
            </Routes>
          </AnimatePresence>
        </motion.div>
    </>
  );
}

export default App;
