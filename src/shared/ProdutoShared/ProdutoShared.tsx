import { Link } from 'react-router-dom';

interface Produtos {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
}

interface PropProdutosutos {
    produtos: Produtos[];
}

export default function ProdutoShared({ produtos }: PropProdutosutos) {
    return (
        <div className='flex overflow-x-auto space-x-4 p-4'>
            {produtos.map((produto) => (
                <Link
                    key={produto.id}
                    to={`/produto/${produto.id}`}
                    className='flex-shrink-0 w-64 bg-white p-4 rounded shadow-md hover:shadow-lg transition' // Adiciona uma classe para hover e transição
                >
                    <img
                        src={produto.imagem}
                        alt={produto.imagem}
                        className='w-full h-32 object-cover rounded'
                    />
                    <h2 className='text-lg font-semibold mt-2'>
                        {produto.nome}
                    </h2>
                    <p className='text-sm text-gray-600 mt-1'>
                        {produto.descricao}
                    </p>
                    <p className='text-sm font-semibold mt-2'>
                        Preço: R${produto.preco}
                    </p>
                </Link>
            ))}
        </div>
    );
}
