export default function Massagens() {
    const massages = [
        {
            id: 1,
            name: 'Massagem Relaxante',
            description: 'Alivia tensões e promove relaxamento profundo.',
            image: '/images/relaxing-massage.jpg',
        },
        {
            id: 2,
            name: 'Massagem Terapêutica',
            description: 'Focada em áreas específicas para alívio de dores.',
            image: '/images/therapeutic-massage.jpg',
        },
        {
            id: 3,
            name: 'Shiatsu',
            description:
                'Técnica japonesa que melhora o equilíbrio energético.',
            image: '/images/shiatsu.jpg',
        },
        {
            id: 4,
            name: 'Massagem com Pedras Quentes',
            description:
                'Relaxamento com uso de pedras quentes em pontos estratégicos.',
            image: '/images/hot-stone-massage.jpg',
        },
    ];

    return (
        <div className='bg-gray-100 py-10'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8 text-center'>
                <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
                    Conheça nossas massagens!
                </h2>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {massages.map((massage) => (
                        <div
                            key={massage.id}
                            className='bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105'
                        >
                            <img
                                src={massage.image}
                                alt={massage.name}
                                className='w-full h-48 object-cover'
                            />
                            <div className='p-6'>
                                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                    {massage.name}
                                </h3>
                                <p className='text-gray-600 mb-4'>
                                    {massage.description}
                                </p>
                                <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
