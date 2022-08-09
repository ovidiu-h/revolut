import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { SidelineModal } from '../../components/Modals/SidelineModal';
import { MainTitle } from '../../components/Texts/MainTitle';
import { Box } from '../../components/Layout/Box';
import { ItemButton } from '../../components/Buttons/ItemButton';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SettingsIcon from '@mui/icons-material/Settings';

const TransactionDetails = styled.div`
    margin: 1em 0;
`;
const TransactionInfo = styled.div``;

const Img = styled.img`
    width: 100%;
`;

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

export const CardsDetails = () => {
    return (
        <SidelineModal>
            <Link to="/home/cards">
                <ArrowBackIcon />
            </Link>
            <TransactionDetails>
                <MainTitle>Online Shopping</MainTitle>
                <TransactionInfo>
                    <Img src="https://bankata.ro/wp-content/uploads/2022/07/Revolut-Standard-e1657032091737.png" />
                </TransactionInfo>
            </TransactionDetails>
            <Box>
                <ItemButton>
                    <ItemDetails>
                        <ItemAvatar>
                            <LockOpenIcon />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Unblock CVV</ItemTitle>
                            <ItemDescription>Use after exceeding 3 tries</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                </ItemButton>
                <ItemButton>
                    <ItemDetails>
                        <ItemAvatar>
                            <SettingsIcon />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Settings</ItemTitle>
                            <ItemDescription>Remove or rename card & more</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                </ItemButton>
            </Box>
        </SidelineModal>
    );
};
