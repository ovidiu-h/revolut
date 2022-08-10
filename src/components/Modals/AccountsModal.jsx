import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changePocket } from '../../redux/accountSlice';

import { Box } from '../Layout/Box';
import { AccountItem } from '../AccountItem';

import Modal from '@mui/material/Modal';

const ModalTitle = styled.h2`
    font-weight: 600;
    margin-bottom: 1em;
`;

const ModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: #f7f7f7;
    border-radius: 12px;
    padding: 1.5em;
`;

const Hr = styled.hr`
    border: 0.5px solid #fff;
    margin: 15px 0;
`;

export const AccountsModal = (props = {}) => {
    const { pockets, currency } = useSelector((state) => state.account);
    const currentAccount = pockets.filter((p) => p.currency === currency);
    const otherAccounts = pockets.filter((p) => p.currency !== currency);

    const dispatch = useDispatch();

    const handleClick = (currency) => {
        dispatch(changePocket(currency));
        props.onClose();
    };

    return (
        <Modal open={props.open} onClose={props.onClose}>
            <ModalBox>
                <ModalTitle>Accounts</ModalTitle>
                <Box>
                    {currentAccount.map((pocket) => (
                        <AccountItem key={pocket.id} pocket={pocket} onClick={handleClick.bind(this, pocket.currency)} />
                    ))}
                </Box>
                <Hr />
                <Box>
                    {otherAccounts.map((pocket) => (
                        <AccountItem key={pocket.id} pocket={pocket} onClick={handleClick.bind(this, pocket.currency)} />
                    ))}
                </Box>
            </ModalBox>
        </Modal>
    );
};
