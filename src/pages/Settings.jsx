import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from '../components/Layout/Box';
import { MainTitle } from '../components/Texts/MainTitle';
import { SectionTitle } from '../components/Texts/SectionTitle';
import { ItemButton } from '../components/Buttons/ItemButton';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpIcon from '@mui/icons-material/Help';
import LanguageIcon from '@mui/icons-material/Language';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import ShieldIcon from '@mui/icons-material/Shield';
import DevicesIcon from '@mui/icons-material/Devices';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const Container = styled.div``;

const AccountDetails = styled.div`
    margin: 2em 0;
`;
const AccountId = styled.h4`
    font-weight: 600;
`;

const ItemDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    color: #0666eb;
`;
const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: #000;
`;
const ItemTitle = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`;
const ItemDescription = styled.div`
    font-size: 0.8em;
    color: #75808a;
`;

const Section = styled.div`
    margin-bottom: 20px;
`;

const Logout = styled(LogoutIcon)`
    color: red;
`;

export const Settings = () => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Link to="/home/accounts">
                <ArrowBackIcon />
            </Link>

            <AccountDetails>
                <MainTitle>John Doe</MainTitle>
                <AccountId>@johndoe</AccountId>
            </AccountDetails>

            <Section>
                <Box>
                    <ItemButton>
                        <ItemDetails>
                            <HelpIcon />
                            <ItemInfo>
                                <ItemTitle>Help</ItemTitle>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                </Box>
            </Section>

            <Section>
                <SectionTitle>Location</SectionTitle>
                <Box>
                    <ItemButton>
                        <ItemDetails>
                            <LanguageIcon />
                            <ItemInfo>
                                <ItemTitle>Language</ItemTitle>
                                <ItemDescription>English</ItemDescription>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                </Box>
            </Section>

            <Section>
                <SectionTitle>Security</SectionTitle>
                <Box>
                    <ItemButton>
                        <ItemDetails>
                            <PhonelinkLockIcon />
                            <ItemInfo>
                                <ItemTitle>Change passcode</ItemTitle>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                    <ItemButton>
                        <ItemDetails>
                            <ShieldIcon />
                            <ItemInfo>
                                <ItemTitle>Privacy</ItemTitle>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                    <ItemButton>
                        <ItemDetails>
                            <DevicesIcon />
                            <ItemInfo>
                                <ItemTitle>Devices</ItemTitle>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                </Box>
            </Section>

            <Section>
                <Box>
                    <ItemButton
                        onClick={() => {
                            dispatch(logout());
                        }}
                    >
                        <ItemDetails>
                            <Logout />
                            <ItemInfo>
                                <ItemTitle>Logout</ItemTitle>
                            </ItemInfo>
                        </ItemDetails>
                    </ItemButton>
                </Box>
            </Section>
        </Container>
    );
};
