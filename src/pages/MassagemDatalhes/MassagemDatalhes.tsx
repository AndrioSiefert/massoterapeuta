import { Link, useParams } from 'react-router-dom';
import massasData from '../../assets/JSON/massagens.json';

interface Massagem {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    image: string;
}

export default function MassagemDatalhes() {
    const { id } = useParams();
    const massagem = massasData.find(
        (massagem: Massagem) => massagem.id === Number(id),
    );

    if (!massagem) {
        return <div>Massagem não encontrada.</div>;
    }

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>{massagem.name}</h1>
            <img
                src={`/imagesMassagem/${massagem.id}/massagem.png`}
                alt={massagem.name}
                className='w-full h-64 object-cover rounded'
            />
            <p className='mt-4'>{massagem.description}</p>
            <p className='mt-2 font-semibold'>Preço: R${massagem.price}</p>
            <p className='mt-2 font-semibold'>
                Duração: {massagem.duration} minutos
            </p>

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
