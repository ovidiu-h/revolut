import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { updateAccountBalance } from '../redux/api';
import { getDisplayAmount } from '../utils';

import { MainTitle } from '../components/Texts/MainTitle';
import { Box } from '../components/Layout/Box';
import { Button } from '../components/Buttons/Button';
import { AccountsModal } from '../components/Modals/AccountsModal';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;
const AccountDetails = styled.div``;
const AccountCurrency = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    font-size: 1.3em;
    margin-bottom: 5px;
`;
const AccountBalance = styled.div`
    font-size: 0.85em;
    color: #75808a;
`;
const AmountDetails = styled.div``;
const Input = styled.input`
    font-size: 1.5em;
    background: transparent;
    border: none;
    text-align: right;
`;
const Hr = styled.hr`
    border: 0.5px solid #fff;
    margin: 30px 0;
`;

const ButtonBig = styled(Button)`
    width: 100%;
    height: 60px;
    font-size: 1em;
`;

export const Topup = () => {
    const { pockets, currency, isFetching } = useSelector((state) => state.account);
    const currentAccount = pockets.find((p) => p.currency === currency);

    const [amount, setAmount] = useState(0);

    const [openAccountsModal, setOpenAccountsModal] = useState(false);
    const handleOpenAccountsModal = () => setOpenAccountsModal(true);
    const handleCloseAccountsModal = () => setOpenAccountsModal(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        updateAccountBalance(dispatch, navigate, { amount, type: 'TOPUP', description: 'Money added via *3527' });
    };

    return (
        <Container>
            <Link to="/home/accounts">
                <ArrowBackIcon />
            </Link>

            <Hr />

            <MainTitle>Add money</MainTitle>

            <Box>
                <Wrapper>
                    <AccountDetails>
                        <AccountCurrency onClick={handleOpenAccountsModal}>
                            {currentAccount.currency} <KeyboardArrowDownIcon />
                        </AccountCurrency>
                        <AccountBalance>Balance: {getDisplayAmount({ ...currentAccount, ignoreSign: true })}</AccountBalance>
                    </AccountDetails>
                    <AmountDetails>
                        <Input type="number" placeholder="0" value={amount} onChange={(ev) => setAmount(ev.target.value)} />
                    </AmountDetails>
                </Wrapper>
                <Wrapper>
                    {[100, 250, 500, 1000].map((value) => (
                        <Button key={value} onClick={() => setAmount(value)}>
                            {currentAccount.currency} {value}
                        </Button>
                    ))}
                </Wrapper>
            </Box>
            <Hr />
            <ButtonBig disabled={!amount || isFetching} onClick={handleClick}>
                Add money
            </ButtonBig>

            <AccountsModal open={openAccountsModal} onClose={handleCloseAccountsModal} />
        </Container>
    );
};
