import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        currency: 'USD',
        cards: [
            {
                id: '45d6a97b-b75b-4a43-989f',
                label: 'Virtual',
                state: 'ACTIVE',
                virtual: true,
                lastFour: '1444',
                expiryDate: '07/26',
            },
            {
                id: '44449c40-698b-45bc-8012',
                label: 'Online Shopping',
                state: 'ACTIVE',
                virtual: true,
                disposable: true,
                lastFour: '2099',
                expiryDate: '07/27',
            },
            {
                id: 'a36da537-39b5-4b2b-ac26',
                label: 'Standard',
                state: 'ACTIVE',
                virtual: false,
                lastFour: '2559',
                expiryDate: '04/27',
            },
        ],
        pockets: [
            {
                id: 'ba4c8b78-6d36-441f-ac1e-b9e0c5a7d1cd',
                state: 'ACTIVE',
                currency: 'RON',
                name: 'Romanian Leu',
                amount: 47663.23,
            },
            {
                id: '4bfb04a5-ba16-4322-a27d-7d85e946035b',
                state: 'ACTIVE',
                currency: 'EUR',
                name: 'Euro',
                amount: 857,
            },
            {
                id: 'e3139b3c-f7e2-40e2-a948-1dd556396dcf',
                state: 'INACTIVE',
                currency: 'USD',
                name: 'US Dollar',
                amount: 23.5,
            },
            {
                id: '07067de0-3757-42a8-814d-2aed55334cc2',
                state: 'ACTIVE',
                currency: 'HUF',
                name: 'Hungarian Forint',
                amount: 0,
            },
        ],
        transactions: [
            {
                id: '62efe336-7282-a03e-94bc',
                type: 'ATM',
                state: 'PENDING',
                createdDate: 1660144369318,
                currency: 'RON',
                amount: -50,
                description: 'Demo',
            },
        ],
    },
    reducers: {
        accountStartFetching: (state, action) => {
            state.isFetching = true;
        },
        changePocket: (state, action) => {
            state.currency = action.payload;
        },
        updateBalance: (state, action) => {
            const pocketIdx = state.pockets.findIndex((p) => p.currency === state.currency);
            state.pockets[pocketIdx].amount += +action.payload.amount;
            state.transactions = [
                {
                    id: (Math.random() + 1).toString(36).substring(7),
                    state: 'PROCESSING',
                    createdDate: new Date().getTime(),
                    currency: state.currency,
                    ...action.payload,
                },
            ].concat(state.transactions);
            state.isFetching = false;
        },
    },
});

export const { updateBalance, changePocket, accountStartFetching } = accountSlice.actions;
export default accountSlice.reducer;
