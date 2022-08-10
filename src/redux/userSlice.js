import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isFetching: false,
        currentUser: localStorage.getItem('user') || null,
    },
    reducers: {
        loginStartFetching: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, actions) => {
            state.isFetching = false;
            state.currentUser = actions.payload;
            localStorage.setItem('user', actions.payload);
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem('user');
        },
    },
});

export const { loginStartFetching, loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
