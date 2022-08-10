import React from 'react';
import styled from 'styled-components';
import { ItemButton } from './Buttons/ItemButton';

const ItemDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;
const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const ItemTitle = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`;
const ItemDescription = styled.div`
    font-size: 0.8em;
    color: #75808a;
`;
const ItemAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
`;

const Img = styled.img`
    width: 100%;
`;
export const CardItem = (props = {}) => {
    const { card } = props;
    return (
        <ItemButton to={`/home/cards/${card.id}`}>
            <ItemDetails>
                <ItemAvatar>
                    <Img src="https://assets.revolut.com/retail-web-account/card_designs/small/visa/original_v3.png" />
                </ItemAvatar>
                <ItemInfo>
                    <ItemTitle>{`${card.label} ··${card.lastFour}`}</ItemTitle>
                    <ItemDescription>{`Expires on ${card.expiryDate}`}</ItemDescription>
                </ItemInfo>
            </ItemDetails>
        </ItemButton>
    );
};
