import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { SidelineModal } from '../../components/Modals/SidelineModal';
import { Box } from '../../components/Layout/Box';
import { ItemButton } from '../../components/Buttons/ItemButton';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const TransactionDetails = styled.div`
    margin: 1em 0;
`;
const TransactionInfo = styled.div``;

const CardDetails = styled.h2`
    margin: 1em 0 0.25em 0;
    font-weight: 600;
`;
const CardExpiryDate = styled.div`
    color: #75808a;
    margin-bottom: 1.5em;
`;
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
    const { id } = useParams();
    const { cards } = useSelector((state) => state.account);
    const card = cards.find((c) => c.id === id);

    return (
        <SidelineModal>
            <Link to="/home/cards">
                <ArrowBackIcon />
            </Link>
            <TransactionDetails>
                <TransactionInfo>
                    <Img src="https://bankata.ro/wp-content/uploads/2022/07/Revolut-Standard-e1657032091737.png" />
                </TransactionInfo>
                <CardDetails>{`${card.label} ··${card.lastFour}`}</CardDetails>
                <CardExpiryDate>{`Expires on ${card.expiryDate}`}</CardExpiryDate>
            </TransactionDetails>
            <Box>
                <ItemButton>
                    <ItemDetails>
                        <ItemAvatar>
                            <RemoveRedEyeIcon />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Show details</ItemTitle>
                            <ItemDescription>See card details</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                </ItemButton>
                {!card.disposable && (
                    <ItemButton>
                        <ItemDetails>
                            <ItemAvatar>
                                <AcUnitIcon />
                            </ItemAvatar>
                            <ItemInfo>
                                <ItemTitle>Freeze</ItemTitle>
                                <ItemDescription>Disable this card</ItemDescription>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                )}
                {!card.virtual && (
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
                )}
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
