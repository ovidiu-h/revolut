import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    letter-spacing: -0.025em;
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 0.5em;
`;

export const MainTitle = (props = {}) => {
    return <Title>{props.children}</Title>;
};
