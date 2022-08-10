import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getDisplayAmount } from '../../utils';
import { Button } from '../../components/Buttons/Button';
import { Box } from '../../components/Layout/Box';
import { SectionTitle } from '../../components/Texts/SectionTitle';
import { AccountsModal } from '../../components/Modals/AccountsModal';
import { TransactionItem } from '../../components/TransactionItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';

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

export const Accounts = () => {
    const { transactions, pockets, currency } = useSelector((state) => state.account);
    const currentAccount = pockets.find((p) => p.currency === currency);

    const [openAccountsModal, setOpenAccountsModal] = useState(false);
    const handleOpenAccountsModal = () => setOpenAccountsModal(true);
    const handleCloseAccountsModal = () => setOpenAccountsModal(false);

    return (
        <Container>
            <Box>
                <WalletContainer>
                    <WalletDetails>
                        <WalletValue onClick={handleOpenAccountsModal}>
                            {getDisplayAmount({ ...currentAccount, ignoreSign: true })}
                            <WalletJewel>
                                <KeyboardArrowDownIcon />
                            </WalletJewel>
                        </WalletValue>
                        <WalletCurrency>{currentAccount.name}</WalletCurrency>
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
                {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
            </Box>
            <AccountsModal open={openAccountsModal} onClose={handleCloseAccountsModal} />

            <Outlet />
        </Container>
    );
};
