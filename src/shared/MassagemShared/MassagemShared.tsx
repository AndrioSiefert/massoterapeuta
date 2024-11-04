import { Link } from 'react-router-dom';

interface Massagem {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    image: string;
}

interface MassagemSharedProps {
    massagens: Massagem[];
}

export default function MassagemShared({ massagens }: MassagemSharedProps) {
    return (
        <div className='flex overflow-x-auto space-x-4 p-4'>
            {massagens.map((massagem) => (
                <Link
                    key={massagem.id}
                    to={`/massagem/${massagem.id}`}
                    className='flex-shrink-0 w-64 bg-white p-4 rounded shadow-md hover:shadow-lg transition'
                >
                    <img
                        src={massagem.image}
                        alt={massagem.name}
                        className='w-full h-32 object-cover rounded'
                    />
                    <h2 className='text-lg font-semibold mt-2'>
                        {massagem.name}
                    </h2>
                    <p className='text-sm text-gray-600 mt-1'>
                        {massagem.description}
                    </p>
                    <p className='text-sm font-semibold mt-2'>
                        Preço: R${massagem.price}
                    </p>
                    <p className='text-sm font-semibold'>
                        Duração: {massagem.duration} minutos
                    </p>
                </Link>
            ))}
        </div>
    );
}
