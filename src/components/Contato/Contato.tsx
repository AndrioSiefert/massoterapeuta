import { FaWhatsapp } from 'react-icons/fa';

export default function Contato() {
    return (
        <div className='bg-green-50 py-16 min-h-screen'>
            <div className='max-w-md mx-auto text-center'>
                <h2 className='text-3xl font-bold text-green-800 mb-4'>
                    Entre em contato!
                </h2>
                <p className='text-gray-600 mb-8'>
                    Tire suas dúvidas ou agende sua sessão pelo WhatsApp.
                </p>
                <a
                    href='https://wa.me/5553981350946'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105 hover:bg-green-700'
                >
                    <FaWhatsapp className='text-2xl mr-2' />
                    Me chame no WhatsApp
                </a>
            </div>
        </div>
    );
}
