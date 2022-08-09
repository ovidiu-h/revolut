import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const cssProps = `
    display: flex;
    align-items: center;
    justify-content: center;

    height: 36px;
    font-size: 0.8em;
    font-weight: 600;
    padding: 0 1em;
    text-transform: capitalize;
    gap: 0.5em;
    
    border-radius: 8px;
    color: #0666eb;
    background-color: #e6f0fd;
    border: none;

    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    & > svg {
    font-size: 1.5em;
    }

    &:hover {
        background-color: #dfe9f6;
    }

    &.active {
        color: #e6f0fd;
        background-color: #0666eb;
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

export const Button = (props = {}) => {
    const Button = props.to ? LinkButton : SampleButton;
    return (
        <Button disabled={props.disabled} to={props.to} onClick={props.onClick}>
            {props.children}
        </Button>
    );
};
