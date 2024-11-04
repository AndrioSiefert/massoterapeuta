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
        <div className='relative'>
            <div className='absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white z-10 pointer-events-none' />
            <div className='absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white z-10 pointer-events-none' />

            <div className='flex overflow-x-auto space-x-4 p-4 scrollbar-hide'>
                {massagens.map((massagem) => (
                    <Link
                        key={massagem.id}
                        to={`/massagem/${massagem.id}`}
                        className='flex-shrink-0 w-64 bg-white p-4 rounded shadow-md hover:shadow-lg transition-transform transform hover:scale-105'
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
        </div>
    );
}
