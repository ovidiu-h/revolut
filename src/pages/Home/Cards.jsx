import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Box } from '../../components/Layout/Box';
import { SectionTitle } from '../../components/Texts/SectionTitle';
import { CardItem } from '../../components/CardItem';

const Container = styled.div``;
const CardsWrapper = styled.div`
    margin: 10px 0;
`;

export const Cards = () => {
    const { cards } = useSelector((state) => state.account);

    const physicalCards = cards.filter((c) => !c.virtual);
    const virtualCards = cards.filter((c) => c.virtual);

    return (
        <Container>
            <Box>
                {!!physicalCards.length && (
                    <CardsWrapper>
                        <SectionTitle>Physical cards</SectionTitle>
                        {physicalCards.map((card) => (
                            <CardItem key={card.id} card={card} />
                        ))}
                    </CardsWrapper>
                )}
                {!!virtualCards.length && (
                    <CardsWrapper>
                        <SectionTitle>Virtual cards</SectionTitle>
                        {virtualCards.map((card) => (
                            <CardItem key={card.id} card={card} />
                        ))}
                    </CardsWrapper>
                )}
            </Box>
            <Outlet />
        </Container>
    );
};
