import React from 'react';
import styled from 'styled-components';

import { getDisplayAmount, getDisplayDate } from '../utils';
import { ItemButton } from './Buttons/ItemButton';

import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ItemDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;
const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const ItemDescription = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`;
const ItemDate = styled.div`
    font-size: 0.8em;
    color: #75808a;
`;
const ItemAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #0666eb1a;
    color: #0666eb;
    font-size: 0.75em;
`;
const TransactionAmount = styled.div``;

export const TransactionItem = (props = {}) => {
    const { transaction } = props;

    return (
        <ItemButton to={`/home/accounts/${transaction.id}`}>
            <ItemDetails>
                <ItemAvatar>
                    {transaction.type === 'TOPUP' && <AddIcon />}
                    {transaction.type === 'ATM' && <CreditCardIcon />}
                    {transaction.type === 'TRANSFER' && <ArrowForwardIcon />}
                </ItemAvatar>
                <ItemInfo>
                    <ItemDescription>{transaction.description}</ItemDescription>
                    <ItemDate>{getDisplayDate(transaction.createdDate)}</ItemDate>
                </ItemInfo>
            </ItemDetails>
            <TransactionAmount>{getDisplayAmount(transaction)}</TransactionAmount>
        </ItemButton>
    );
};
