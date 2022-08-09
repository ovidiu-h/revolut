import React from 'react';
import styled from 'styled-components';

import { Outlet } from 'react-router-dom';

import { Box } from '../../components/Layout/Box';
import { SectionTitle } from '../../components/Texts/SectionTitle';
import { ItemButton } from '../../components/Buttons/ItemButton';

const Container = styled.div``;

const PhysicalCardsWrapper = styled.div`
    margin: 10px 0;
`;

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

export const Cards = () => {
    return (
        <Container>
            <Box>
                <PhysicalCardsWrapper>
                    <SectionTitle>Physical cards</SectionTitle>
                    <ItemButton to="/home/cards/test1">
                        <ItemDetails>
                            <ItemAvatar>
                                <Img src="https://assets.revolut.com/retail-web-account/card_designs/small/visa/original_v3.png" />
                            </ItemAvatar>
                            <ItemInfo>
                                <ItemTitle>Standard ··5141</ItemTitle>
                                <ItemDescription>Expires on 04/27</ItemDescription>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                </PhysicalCardsWrapper>
                <SectionTitle>Virtual cards</SectionTitle>
                <ItemButton to="/home/cards/test2">
                    <ItemDetails>
                        <ItemAvatar>
                            <Img src="https://assets.revolut.com/retail-web-account/card_designs/small/visa/original_v3.png" />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Standard ··5141</ItemTitle>
                            <ItemDescription>Expires on 04/27</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                </ItemButton>
                <ItemButton to="/home/cards/test3">
                    <ItemDetails>
                        <ItemAvatar>
                            <Img src="https://assets.revolut.com/retail-web-account/card_designs/small/visa/original_v3.png" />
                        </ItemAvatar>
                        <ItemInfo>
                            <ItemTitle>Standard ··5141</ItemTitle>
                            <ItemDescription>Expires on 04/27</ItemDescription>
                        </ItemInfo>
                    </ItemDetails>
                </ItemButton>
            </Box>
            <Outlet />
        </Container>
    );
};
