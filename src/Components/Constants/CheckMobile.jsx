import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layoutActions } from '../../Store/layoutSlice';
import { layoutStateConstant } from './AppLayout';
import { useLocation } from 'react-router-dom';

const CheckMobile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    
    const {showMenu, firstlayoutCheck, isMobile} = useSelector(s => s.layout);

    function handleWindowSizeChange() {
        // if (location.pathname !== '/' && !isMobile) {
        //     dispatch(layoutActions.setMenu(true));
        // }

        dispatch(layoutActions.setIsMobile(window.innerWidth <= 720));
        if (window.innerWidth <= 720) {
            dispatch(layoutActions.setLayoutState('mobile'));
        } 
        else {
            dispatch(layoutActions.setLayoutState('right'));
        }
    }

    if (firstlayoutCheck) {
        dispatch(layoutActions.setFirstLayoutCheck(false));
        if (window.innerWidth <= 720) {
            dispatch(layoutActions.setLayoutState('mobile'));
            dispatch(layoutActions.setIsMobile(true));
        } else {
            dispatch(layoutActions.setIsMobile(false));
            dispatch(layoutActions.setLayoutState('right'));
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

  return (
    <>
      
    </>
  )
}

export default CheckMobile
