import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AbMe } from '../pages/AbMe'

export default function Tabs() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AbMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

 