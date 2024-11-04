import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div className='flex flex-col justify-center bg-medical-gray '>
                <h1 className='font-black mt-5 text-center font-titulo  text-white text-4xl bg-gradient-to-r from-blue-800 to-blue-300 '>
                    MASSOTERAPEURA
                    <br />& ESTETICISTA
                </h1>
                <div className='flex justify-center'>
                    <img
                        src='images/eliane.jpg'
                        alt='massoterapeuta'
                        className='w-64 h-64 object-cover rounded-full mt-5 mb-5'
                    />
                    <img
                        src='images/mancha.png'
                        alt='estetico'
                        className=' flex w-64 h-64 right-0 object-cover  absolute'
                    />
                    <img
                        src='images/mancha.png'
                        alt='estetico'
                        className='absolute left-0 w-64 h-64 object-cover scale-x-[-1]'
                    />
                </div>
                <div>
                    <p className='bg-gradient-to-r from-white to-gray-200 rounded-lg border font-medium text-lg text-center'>
                        MEU NOME É ELIANE SIEFERT, FAÇO ATENDIMENTO EM
                        CAMAQUÃ-RS, PARA VOCÊ QUE BUSCA QUALIDADE DE VIDA E
                        <br />
                        BEM-ESTAR.
                    </p>
                    <div className='flex justify-center'>
                        <Link to='/contato'>
                            <button className='bg-medical-blue text-white font-bold py-2 px-4 rounded-lg mt-2 mb-5'>
                                CONTATO
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
