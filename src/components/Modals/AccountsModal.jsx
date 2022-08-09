import React from 'react';

import Modal from '@mui/material/Modal';
import { MainTitle } from '../Texts/MainTitle';

import { ItemButton } from '../Buttons/ItemButton';
import { Box } from '../Layout/Box';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

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
    return (
        <Modal open={props.open} onClose={props.onClose}>
            <ModalBox>
                <MainTitle>Accounts</MainTitle>
                <Box>
                    <ItemButton>
                        <ItemDetails>
                            <ItemAvatar>
                                <AddIcon />
                            </ItemAvatar>
                            <ItemInfo>
                                <ItemTitle>Test</ItemTitle>
                                <ItemDescription>Ron</ItemDescription>
                            </ItemInfo>
                        </ItemDetails>
                        <TransactionValue>RON 300.00</TransactionValue>
                    </ItemButton>
                </Box>
                <Hr />
                <Box>
                    <ItemButton>
                        <ItemDetails>
                            <ItemAvatar>
                                <AddIcon />
                            </ItemAvatar>
                            <ItemInfo>
                                <ItemTitle>Test</ItemTitle>
                                <ItemDescription>Ron</ItemDescription>
                            </ItemInfo>
                        </ItemDetails>
                        <TransactionValue>RON 300.00</TransactionValue>
                    </ItemButton>
                    <ItemButton>
                        <ItemDetails>
                            <ItemAvatar>
                                <AddIcon />
                            </ItemAvatar>
                            <ItemInfo>
                                <ItemTitle>Test</ItemTitle>
                                <ItemDescription>Ron</ItemDescription>
                            </ItemInfo>
                        </ItemDetails>
                        <TransactionValue>RON 300.00</TransactionValue>
                    </ItemButton>
                    <ItemButton>
                        <ItemDetails>
                            <ItemAvatar>
                                <AddIcon />
                            </ItemAvatar>
                            <ItemInfo>
                                <ItemTitle>Test</ItemTitle>
                                <ItemDescription>Ron</ItemDescription>
                            </ItemInfo>
                        </ItemDetails>
                        <TransactionValue>RON 300.00</TransactionValue>
                    </ItemButton>
                </Box>
            </ModalBox>
        </Modal>
    );
};
