import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import produtosData from '../../assets/JSON/produtos.json';

interface Produtos {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
}

export default function ProdutosDetalhes() {
    const { id } = useParams();
    const produto = produtosData.find(
        (produto: Produtos) => produto.id === Number(id),
    );

    if (!produto) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>{produto.nome}</h1>
            <img
                src={`/imagesProduto/${produto.id}/produto.jpg`}
                alt={produto.nome}
                className='w-full h-64 object-cover rounded'
            />
            <p className='mt-4'>{produto.descricao}</p>
            <p className='mt-2 font-semibold'>Preço: R${produto.preco}</p>

            <div className='flex justify-center'>
                <Link to='/contato'>
                    <button className='bg-medical-green text-white font-bold py-2 px-4 rounded-lg mt-2'>
                        AGENDAR
                    </button>
                </Link>
                <Link to='/massagens'>
                    <button className='bg-medical-blue text-white font-bold py-2 px-4 rounded-lg mt-2 ml-2'>
                        VOLTAR
                    </button>
                </Link>
            </div>
        </div>
    );
}
