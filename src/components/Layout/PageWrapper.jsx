import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { IconButton } from '../../components/Buttons/IconButton';
import { PageContainer } from '../../components/Layout/PageContainer';

import HomeIcon from '@mui/icons-material/Home';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import WidgetsIcon from '@mui/icons-material/Widgets';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    min-height: 100vh;
    position: relative;
`;

const Sidebar = styled.div`
    @media (min-width: 720px) {
        position: absolute;
        top: 0;
        left: 0;
        padding: 2em 1em;
    }

    @media (max-width: 719px) {
        width: 100%;
        padding: 1em 0.5em;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Hr = styled.hr`
    border: 0.5px solid #fff;
    margin: 15px 0;

    @media (max-width: 719px) {
        display: none;
    }
`;

const UserAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: #6262d3;
    color: #fff;
    font-size: 0.75em;
`;

export const PageWrapper = () => {
    return (
        <Wrapper>
            <Sidebar>
                <IconButton to="/settings">
                    <UserAvatar>T</UserAvatar>
                </IconButton>
                <Hr />
                <IconButton to="/home">
                    <HomeIcon />
                </IconButton>
                <IconButton to="/payment">
                    <SwapHorizIcon />
                </IconButton>
                <IconButton to="/hub">
                    <WidgetsIcon />
                </IconButton>
            </Sidebar>
            <PageContainer>
                <Outlet />
            </PageContainer>
        </Wrapper>
    );
};
