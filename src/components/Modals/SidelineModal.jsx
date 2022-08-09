import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 20px 0;

    @media (max-width: 1024px) {
        left: 0;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
    }
`;

const Box = styled.div`
    width: 400px;
    height: 100%;
    background-color: #f5f5f5;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 20px;
    box-shadow: rgb(25 28 31 / 5%) 0px 0.125rem 0.25rem, rgb(25 28 31 / 10%) 0px 0.1875rem 1rem;

    @media (max-width: 1024px) {
        box-shadow: none;
    }
`;

export const SidelineModal = (props = {}) => {
    useEffect(() => {
        document.body.classList.add('with-sideline-modal');
        return () => {
            document.body.classList.remove('with-sideline-modal');
        };
    }, []);
    return (
        <Container>
            <Box>{props.children}</Box>
        </Container>
    );
};
