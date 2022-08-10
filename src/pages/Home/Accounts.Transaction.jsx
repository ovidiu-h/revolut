import React from 'react';
import styled from 'styled-components';

import { Link, useParams } from 'react-router-dom';
import { SidelineModal } from '../../components/Modals/SidelineModal';
import { MainTitle } from '../../components/Texts/MainTitle';
import { Box } from '../../components/Layout/Box';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import { getDisplayAmount, getDisplayDate } from '../../utils';

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
const DetailsDescription = styled.div`
    text-transform: lowercase;
`;

export const AccountsTransaction = () => {
    const { id } = useParams();
    const { transactions } = useSelector((state) => state.account);
    const transaction = transactions.find((t) => t.id === id);

    return (
        <SidelineModal>
            <Link to="/home/accounts">
                <ArrowBackIcon />
            </Link>
            <TransactionDetails>
                <MainTitle>{getDisplayAmount(transaction)}</MainTitle>
                <TransactionInfo>
                    <TransactionTitle>{transaction.description}</TransactionTitle>
                    <TransactionDescription>{getDisplayDate(transaction.createdDate)}</TransactionDescription>
                </TransactionInfo>
            </TransactionDetails>
            <Box>
                <Details>
                    <DetailsLabel>Status</DetailsLabel>
                    <DetailsDescription>{transaction.state}</DetailsDescription>
                </Details>
                <Details>
                    <DetailsLabel>Type</DetailsLabel>
                    <DetailsDescription>{transaction.type}</DetailsDescription>
                </Details>
            </Box>
        </SidelineModal>
    );
};
