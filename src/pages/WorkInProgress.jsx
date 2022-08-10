import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MainTitle } from '../components/Texts/MainTitle';
import { Box } from '../components/Layout/Box';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SectionTitle } from '../components/Texts/SectionTitle';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
`;

export const WorkInProgress = () => {
    return (
        <Container>
            <Box>
                <Wrapper>
                    <MainTitle>Work in progress :(</MainTitle>
                    <Link to="/home/accounts">
                        <SectionTitle>Back to home</SectionTitle>
                    </Link>
                </Wrapper>
            </Box>
        </Container>
    );
};
