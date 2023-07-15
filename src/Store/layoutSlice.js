import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
    name: 'layoutSlice',
    initialState: {
        route: '',
        showMenu: true,
        isMobile: true,
        layoutState: 'mobile',
        firstLoading: true,
        firstlayoutCheck: true,
    },
    reducers: {
        setMenu: (state, action) => {
            state.showMenu = action.payload;
        },
        setRoute: (state, action) => {
            state.route = action.payload;
        },
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        },
        setLayoutState: (state, action) => {
            state.layoutState = action.payload;
        },
        setFirstLoading: (state, action) => {
            state.firstLoading = action.payload;
        },
        setFirstLayoutCheck: (state, action) => {
            state.firstlayoutCheck = action.payload;
        }
    }
});

export const layoutActions = layoutSlice.actions;