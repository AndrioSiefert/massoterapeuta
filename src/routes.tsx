import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Massagens from './pages/Massagens';
import Contato from './components/Contato/Contato';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home';
import MassagemDatalhes from './pages/MassagemDatalhes/MassagemDatalhes';
import ProdutosDetalhes from './pages/ProdutosDetalhes/ProdutosDetalhes';

function RouterApp() {
    return (
        <BrowserRouter>
            <div className='min-h-screen flex flex-col'>
                <Header />

                <main className='flex-grow bg-medical-gray'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/massagens' element={<Massagens />} />
                        <Route path='/contato' element={<Contato />} />
                        <Route
                            path='/massagem/:id'
                            element={<MassagemDatalhes />}
                        />
                        <Route
                            path='/produto/:id'
                            element={<ProdutosDetalhes />}
                        />
                    </Routes>
                </main>

                <Rodape />
            </div>
        </BrowserRouter>
    );
}

export default RouterApp;
