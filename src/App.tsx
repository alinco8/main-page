import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Top from './pages/Top';
import Setting from './pages/Setting';
import Navigator from './components/Navigator';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigator />
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
