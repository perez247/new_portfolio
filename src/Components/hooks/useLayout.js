import { useSelector } from "react-redux";
import { layoutStateConstant } from "../Constants/AppLayout";

const useLayout = () => {
    let currentState = layoutStateConstant.mobile;

    const {layoutState, isMobile } = useSelector(s => s.layout);
  
    if (!isMobile) {
    //   setTimeout(() => {
        currentState = layoutStateConstant[layoutState]
    //   }, 1000);
    }



    return { currentState, isMobile }
}

export default useLayout;
