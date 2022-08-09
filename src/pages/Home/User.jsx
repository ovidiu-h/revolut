import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { TabButton } from '../../components/Buttons/TabButton';
import { MainTitle } from '../../components/Texts/MainTitle';

const Container = styled.div``;

const UserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-bottom: 1em;
`;

export const User = () => {
    return (
        <Container>
            <MainTitle>Home</MainTitle>
            <UserMenu>
                <TabButton to="/home/accounts">accounts</TabButton>
                <TabButton to="/home/cards">cards</TabButton>
                <TabButton to="/home/stocks">stocks</TabButton>
                <TabButton to="/home/crypto">crypto</TabButton>
            </UserMenu>
            <Outlet />
        </Container>
    );
};
