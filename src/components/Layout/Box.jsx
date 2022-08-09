import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 12px;
    background-color: #fff;
    padding: 4px;
`;

export const Box = (props = {}) => {
    return <Container>{props.children}</Container>;
};
