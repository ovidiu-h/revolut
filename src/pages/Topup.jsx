import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MainTitle } from '../components/Texts/MainTitle';
import { Box } from '../components/Layout/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';
import { Button } from '../components/Buttons/Button';

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
    margin: 15px 0;
`;

export const Topup = () => {
    const [amount, setAmount] = useState(0);

    return (
        <Container>
            <Link to="/home/accounts">
                <ArrowBackIcon />
            </Link>
            <MainTitle>Add money</MainTitle>
            <Box>
                <Wrapper>
                    <AccountDetails>
                        <AccountCurrency>
                            RON <KeyboardArrowDownIcon />
                        </AccountCurrency>
                        <AccountBalance>Balance: RON 300.00</AccountBalance>
                    </AccountDetails>
                    <AmountDetails>
                        <Input type="number" placeholder="0" value={amount} onChange={(ev) => setAmount(ev.target.value)} />
                    </AmountDetails>
                </Wrapper>
                <Wrapper>
                    <Button onClick={() => setAmount(100)}>RON 100</Button>
                    <Button onClick={() => setAmount(250)}>RON 250</Button>
                    <Button onClick={() => setAmount(500)}>RON 500</Button>
                    <Button onClick={() => setAmount(1000)}>RON 1000</Button>
                </Wrapper>
            </Box>
            <Hr />
            <Button to="/home" disabled={!amount}>
                Continue
            </Button>
        </Container>
    );
};
