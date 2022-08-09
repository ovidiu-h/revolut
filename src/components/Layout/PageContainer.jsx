import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 0.5em;

    @media (min-width: 720px) {
        max-width: 500px;
        padding: 2em 0;
    }
`;

export const PageContainer = (props = {}) => {
    return <Container>{props.children}</Container>;
};
