import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const cssProps = `
    display: flex;
    align-items: center;
    justify-content: center;

    height: 36px;
    font-size: 0.875em;
    font-weight: 600;
    padding: 0 1em;
    text-transform: capitalize;
    
    border-radius: 8px;
    border: none;
    color: #75808a;

    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: transparent;

    &:hover {
        color: #191c1f;
    }

    &.active {
        color: #191c1f;
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

export const TabButton = (props = {}) => {
    const Button = props.to ? LinkButton : SampleButton;
    return <Button {...props}>{props.children}</Button>;
};
