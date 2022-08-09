import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
    font-size: 0.85em;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #75808a;
    padding: 5px 10px;
`;

export const SectionTitle = (props = {}) => {
    return <Title>{props.children}</Title>;
};
