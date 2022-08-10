import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const cssProps = `
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;

    border-radius: 12px;
    color: #75808a;
    border: none;

    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: transparent;

    &:hover {
        background-color: #dfe3e7;
    }

    &.active {
        color: #0666eb;
        background-color: #fff;
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

export const IconButton = (props = {}) => {
    const Button = props.to ? LinkButton : SampleButton;
    return <Button {...props}>{props.children}</Button>;
};
