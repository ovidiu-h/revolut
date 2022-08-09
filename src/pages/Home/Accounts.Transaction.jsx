import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { SidelineModal } from '../../components/Modals/SidelineModal';
import { MainTitle } from '../../components/Texts/MainTitle';
import { Box } from '../../components/Layout/Box';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TransactionDetails = styled.div`
    margin: 1em 0;
`;
const TransactionInfo = styled.div``;
const TransactionTitle = styled.div`
    margin-bottom: 0.5em;
`;
const TransactionDescription = styled.div`
    color: #75808a;
    font-size: 0.85em;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
`;
const DetailsLabel = styled.div`
    color: #75808a;
`;
const DetailsDescription = styled.div``;

export const AccountsTransaction = () => {
    return (
        <SidelineModal>
            <Link to="/home/accounts">
                <ArrowBackIcon />
            </Link>
            <TransactionDetails>
                <MainTitle>+ RON 300.00</MainTitle>
                <TransactionInfo>
                    <TransactionTitle>Cash at Str Nicolae Iorga</TransactionTitle>
                    <TransactionDescription>Pending - Yesterday, 19:07</TransactionDescription>
                </TransactionInfo>
            </TransactionDetails>
            <Box>
                <Details>
                    <DetailsLabel>Status</DetailsLabel>
                    <DetailsDescription>Completed</DetailsDescription>
                </Details>
                <Details>
                    <DetailsLabel>Status</DetailsLabel>
                    <DetailsDescription>Completed</DetailsDescription>
                </Details>
                <Details>
                    <DetailsLabel>Status</DetailsLabel>
                    <DetailsDescription>Completed</DetailsDescription>
                </Details>
            </Box>
        </SidelineModal>
    );
};
