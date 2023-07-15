import { configureStore } from "@reduxjs/toolkit";
import { layoutSlice } from "./layoutSlice";
import { Provider } from "react-redux";

const AppStore = configureStore({
    reducer: {
        layout: layoutSlice.reducer
    }
});

const StateProvider = props => {
    return (
        <Provider store={AppStore}>
            {props.children}
        </Provider>
    )
}

export default StateProvider;

