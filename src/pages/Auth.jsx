import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PageContainer } from '../components/Layout/PageContainer';
import { MainTitle } from '../components/Texts/MainTitle';
import { login } from '../redux/api';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    min-height: 100vh;
    position: relative;
`;

const Description = styled.div`
    color: #75808a;
    margin-bottom: 40px;
`;

const InputWrapper = styled.label`
    display: block;
    height: 60px;
    border-radius: 8px;
    padding: 25px 15px 5px 15px;
    margin-bottom: 1em;
    line-height: 30px;

    background-color: #edeef0;
    color: #828b94;

    position: relative;
    cursor: pointer;
`;
const Placeholder = styled.span`
    position: absolute;
    left: 15px;
    top: 15px;

    transition: all 0.3s ease;
    transform-origin: 0 0;
    pointer-events: none;
`;

const Input = styled.input`
    background-color: transparent;
    border: none;

    font-size: 1.5em;
    display: block;
    height: 30px;
    width: 100%;

    &:not(:placeholder-shown),
    &:focus {
        & + .placeholder {
            transform: scale(0.75) translate(0px, -10px);
        }
    }
`;

const Button = styled.button`
    width: 260px;
    padding: 15px;

    border-radius: 8px;
    border: none;

    cursor: pointer;
    text-align: center;
    font-weight: 600;

    color: #e6f0fd;
    background-color: #0666eb;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0555c3;
    }

    &:disabled {
        pointer-events: none;
        background-color: rgba(6, 102, 235, 0.55);
    }
`;

export const Auth = () => {
    const [user, setUser] = useState('');
    const { isFetching } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const handleClick = () => login(dispatch, user);

    return (
        <Wrapper>
            <PageContainer>
                <MainTitle>Log in to Revolut</MainTitle>
                <Description>Enter your registered mobile number to log in.</Description>
                <InputWrapper htmlFor="phone">
                    <Input
                        onChange={(ev) => setUser(ev.target.value.replace(/[^0-9]/g, ''))}
                        id="phone"
                        placeholder=" "
                        type="tel"
                        maxLength={10}
                        value={user.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3')}
                    />
                    <Placeholder className="placeholder">Mobile number</Placeholder>
                </InputWrapper>
                <Button onClick={handleClick} disabled={isFetching}>
                    Login
                </Button>
            </PageContainer>
        </Wrapper>
    );
};
