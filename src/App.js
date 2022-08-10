import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PageWrapper } from './components/Layout/PageWrapper';

import { Auth } from './pages/Auth';

import { Accounts } from './pages/Home/Accounts';
import { AccountsTransaction } from './pages/Home/Accounts.Transaction';
import { Cards } from './pages/Home/Cards';
import { CardsDetails } from './pages/Home/Cards.Details';
// import { Crypto } from './pages/Home/Crypto';
// import { Stocks } from './pages/Home/Stocks';

import { User } from './pages/Home/User';

// import { Hub } from './pages/Hub';
import { NotFound } from './pages/NotFound';
import { Payment } from './pages/Payment';
import { Settings } from './pages/Settings';
import { Topup } from './pages/Topup';
import { WorkInProgress } from './pages/WorkInProgress';

const App = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div>
            <BrowserRouter>
                {currentUser && (
                    <Routes>
                        <Route path="/" element={<PageWrapper />}>
                            <Route index element={<Navigate to="/home" replace />} />
                            <Route path="start" element={<Navigate to="/home" replace />} />

                            <Route path="home" element={<User />}>
                                <Route index element={<Navigate to="/home/accounts" replace />} />
                                <Route path="accounts" element={<Accounts />}>
                                    <Route path=":id" element={<AccountsTransaction />} />
                                </Route>
                                <Route path="cards" element={<Cards />}>
                                    <Route path=":id" element={<CardsDetails />} />
                                </Route>
                                <Route path="stocks" element={<WorkInProgress />} />
                                <Route path="crypto" element={<WorkInProgress />} />
                                <Route path="*" element={<NotFound />} />
                            </Route>

                            <Route path="/topup" element={<Topup />} />
                            <Route path="/payment" element={<Payment />} />
                            <Route path="/hub" element={<WorkInProgress />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                )}

                {!currentUser && (
                    <Routes>
                        <Route path="*" element={<Navigate to="/start" replace />} />
                        <Route path="/start" element={<Auth />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
};

export default App;
