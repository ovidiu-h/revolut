import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const cssProps = `
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0.75em;
    border-radius: 12px;
    border: none;

    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: transparent;

    &:hover {
        background-color: #f7f7f7;
    }

    &.active {
        color: #0666eb;
    }
    &[disabled] {
        pointer-events: none;
        opacity: .6;
    }
`;
const SampleButton = styled.button`
    ${cssProps}
`;

const LinkButton = styled(NavLink)`
    ${cssProps}
`;

export const ItemButton = (props = {}) => {
    const Button = props.to ? LinkButton : SampleButton;
    return <Button {...props}>{props.children}</Button>;
};
