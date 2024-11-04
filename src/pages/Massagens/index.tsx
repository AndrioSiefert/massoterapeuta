import massagensData from '../../assets/JSON/massagens.json';
import produtosData from '../../assets/JSON/produtos.json';

import MassagemShared from '../../shared/MassagemShared/MassagemShared';
import ProdutoShared from '../../shared/ProdutoShared/ProdutoShared';

export default function Massagens() {
    return (
        <div className='mt-5'>
            <MassagemShared massagens={massagensData} />
            <ProdutoShared produtos={produtosData} />
        </div>
    );
}
