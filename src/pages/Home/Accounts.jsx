import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Buttons/Button';
import { Box } from '../../components/Layout/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SectionTitle } from '../../components/Texts/SectionTitle';
import { ItemButton } from '../../components/Buttons/ItemButton';
import { AccountsModal } from '../../components/Modals/AccountsModal';
import { Outlet } from 'react-router-dom';

const Container = styled.div``;

const WalletContainer = styled.div`
    padding: 10px;
`;
const WalletDetails = styled.div``;
const WalletValue = styled.div`
    font-size: 2em;
    font-weight: 600;
    display: inline-flex;
    align-items: baseline;
    cursor: pointer;
`;
const WalletValueDecimals = styled.span`
    font-size: 0.75em;
`;
const WalletCurrency = styled.div`
    color: #75808a;
    font-size: 0.85em;
    margin: 5px 0 10px 0;
`;
const WalletActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;
const WalletJewel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background-color: #0666eb1a;
    color: #0666eb;
    font-size: 0.5em;
    margin-left: 0.5em;
`;

const TransactionValue = styled.div``;

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

export const Accounts = () => {
    const [openAccountsModal, setOpenAccountsModal] = useState(false);
    const handleOpenAccountsModal = () => setOpenAccountsModal(true);
    const handleCloseAccountsModal = () => setOpenAccountsModal(false);

    return (
        <Container>
            <Box>
                <WalletContainer>
                    <WalletDetails>
                        <WalletValue onClick={handleOpenAccountsModal}>
                            RON 123.<WalletValueDecimals>33</WalletValueDecimals>
                            <WalletJewel>
                                <KeyboardArrowDownIcon />
                            </WalletJewel>
                        </WalletValue>
                        <WalletCurrency>Romanian Leu</WalletCurrency>
                    </WalletDetails>
                    <WalletActions>
                        <Button to="/topup">
                            <AddIcon />
                            Add money
                        </Button>
                        <Button to="/payment">
                            <ArrowForwardIcon />
                            Send
                        </Button>
                        <Button>
                            <MoreHorizIcon />
                        </Button>
                    </WalletActions>
                </WalletContainer>

                <SectionTitle>Transactions</SectionTitle>
                <ItemButton to="/home/accounts/test1">
                    <ItemDetails>
                        <ItemAvatar>
                            <AddIcon />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Money added via ··5141</ItemTitle>
                            <ItemDescription>Yesterday, 19:07</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                    <TransactionValue>+ RON 300.00</TransactionValue>
                </ItemButton>
                <ItemButton to="/home/accounts/test2">
                    <ItemDetails>
                        <ItemAvatar>
                            <AddIcon />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Cash at Str Nicolae Iorga</ItemTitle>
                            <ItemDescription>Pending - Yesterday, 19:07</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                    <TransactionValue>- RON 300.00</TransactionValue>
                </ItemButton>
                <ItemButton to="/home/accounts/test3">
                    <ItemDetails>
                        <ItemAvatar>
                            <AddIcon />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Money added via ··5141</ItemTitle>
                            <ItemDescription>Yesterday, 19:07</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                    <TransactionValue>+ RON 300.00</TransactionValue>
                </ItemButton>
            </Box>
            <AccountsModal open={openAccountsModal} onClose={handleCloseAccountsModal} />

            <Outlet />
        </Container>
    );
};
