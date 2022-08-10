import { accountStartFetching, updateBalance } from './accountSlice';
import { loginStartFetching, loginSuccess } from './userSlice';

const fakeReq = (data) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });

export const login = async (dispatch, data) => {
    dispatch(loginStartFetching());
    try {
        const res = await fakeReq(data);
        dispatch(loginSuccess(res));
    } catch (error) {}
};

export const updateAccountBalance = async (dispatch, navigate, data) => {
    dispatch(accountStartFetching());
    try {
        const res = await fakeReq(data);
        dispatch(updateBalance(res));
        dispatch(navigate('/home'));
    } catch (error) {}
};
