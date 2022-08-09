import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

export const Payment = () => {
    return (
        <div>
            <Link to="/home/accounts">
                <ArrowBackIcon />
            </Link>
        </div>
    );
};
