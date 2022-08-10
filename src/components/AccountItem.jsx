import React from 'react';
import styled from 'styled-components';

import { getDisplayAmount } from '../utils';
import { ItemButton } from './Buttons/ItemButton';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EuroIcon from '@mui/icons-material/Euro';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ItemDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;
const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const ItemTitle = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`;
const ItemDescription = styled.div`
    font-size: 0.8em;
    color: #75808a;
`;
const TransactionValue = styled.div``;

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

export const AccountItem = (props = {}) => {
    const { pocket, onClick } = props;

    return (
        <ItemButton key={pocket.id} onClick={onClick}>
            <ItemDetails>
                <ItemAvatar>
                    {pocket.currency === 'EUR' && <EuroIcon />}
                    {pocket.currency === 'USD' && <AttachMoneyIcon />}
                    {!['EUR', 'USD'].includes(pocket.currency) && <AccountBalanceIcon />}
                </ItemAvatar>
                <ItemInfo>
                    <ItemTitle>{pocket.name}</ItemTitle>
                    <ItemDescription>{pocket.currency}</ItemDescription>
                </ItemInfo>
            </ItemDetails>
            <TransactionValue>{getDisplayAmount({ ...pocket, ignoreSign: true })}</TransactionValue>
        </ItemButton>
    );
};
