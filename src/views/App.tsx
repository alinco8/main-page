import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import {} from '@mui/icons-material';

import Top from './pages/Top';
import Setting from './pages/Setting';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Navigator from './components/Navigator';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
