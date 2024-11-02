import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header/Header';
import Massagens from '../pages/Massagens';

function RouterApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/massagens' element={<Massagens />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;
