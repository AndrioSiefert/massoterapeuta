import { Link } from 'react-router-dom';
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';

export default function Home() {
    return (
        <div className='flex flex-col justify-center bg-medical-gray my-5 '>
            <div className='flex flex-col bg-gradient-to-b from-medical-gray to-gray-700 mx-2 '>
                <h1 className='font-black mt-5 text-center font-titulo  text-white text-3xl'>
                    MASSOTERAPEURA
                    <br />&
                    <br />
                    ESTETICISTA
                </h1>
                <p className='text-white rounded-lg mt-3 font-subtitulo font-thin text-xl text-center mb-10'>
                    RENOVE, RELAXE, REVITALIZE
                </p>
            </div>

            {/* PARTE 2 */}

            <div className='flex flex-col items-center mt-5 mx-5 mb-5 border-4 rounded-lg shadow-lg border-medical-blue'>
                <div className='flex items-center mb-5 mt-5'>
                    <div className='w-16 h-1 bg-medical-blue mr-3'></div>
                    <h1 className='font-bold text-center font-titulo text-black text-lg'>
                        VEJA MEUS SERVIÇOS
                    </h1>
                    <div className='w-16 h-1  bg-medical-blue ml-3'></div>
                </div>

                <p className='text-white rounded-lg  font-medium text-lg text-center'>
                    ACESSE AQUI PARA VER TODOS OS SERVIÇOS QUE OFEREÇO, E
                    ENCONTRE O QUE MAIS SE ENCAIXA COM SUAS NECESSIDADES. DESDE
                    MASSAGENS RELAXANTES, ATÉ TRATAMENTOS ESTÉTICOS FACIAIS E
                    CORPORAIS.
                </p>
                <button className='bg-medical-blue text-white font-bold py-2 px-4 rounded-lg mt-2 mb-5'>
                    <Link to='/massagens'>VER SERVIÇOS</Link>
                </button>
            </div>

            {/* PARTE 3 */}
            <div className='flex flex-col jus bg-white mx-5 '>
                <div className='flex justify-center'>
                    <img
                        src='images/eliane.jpg'
                        alt='massoterapeuta'
                        className='w-64 h-64 object-cover rounded-lg mt-5 mb-5'
                    />
                </div>
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
                <div className='flex flex-col justify-center'>
                    <p className='bg-gradient-to-r from-white rounded-lg  font-medium text-lg text-center'>
                        MEU NOME É ELIANE SIEFERT, SOU MASSOTERAPEUTA E
                        ESTETICISTA, TRABALHO COMO PROFISSIONAL DA ÁREA DA
                        SAÚDE. ATENDO EM CAMAQUÃ-RS, E MEU OBJETIVO É
                        PROPORCIONAR BEM-ESTAR E QUALIDADE DE VIDA AOS MEUS
                        CLIENTES.
                    </p>
                    <Link className='flex justify-center' to='/contato'>
                        <button className='bg-medical-blue text-white font-bold py-2 px-4 rounded-lg mt-2 mb-5 flex justify-center'>
                            VEJA MAIS SOBRE MIM
                        </button>
                    </Link>
                </div>
            </div>

            {/* PARTE 4 */}
            <div className='bg-medical-gray py-8'>
                <h1 className='text-center text-2xl font-bold mb-6'>
                    ALGUMA COISA AQUI
                </h1>
                <div className='flex justify-center space-x-8'>
                    <div className='w-32 h-32 bg-gray-200 flex items-center justify-center'>
                        <span className='text-center font-semibold'>
                            SERVIÇO UM
                        </span>
                    </div>
                    <div className='w-32 h-32 bg-gray-200 flex items-center justify-center'>
                        <span className='text-center font-semibold'>
                            SERVIÇO DOIS
                        </span>
                    </div>
                    <div className='w-32 h-32 bg-gray-200 flex items-center justify-center'>
                        <span className='text-center font-semibold'>
                            SERVIÇO TRÊS
                        </span>
                    </div>
                </div>
            </div>

            <div className='bg-white p-5 mx-2'>
                <div className='bg-medical-gray max-w-2xl mx-auto text-center py-8 px-4 border border-gray-300'>
                    <h2 className='text-2xl font-bold'>COLOCAR ALGO</h2>
                    <p className='text-gray-600 mt-2'>
                        reviews, alguma coisa, etc.
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center p-6 bg-gray-900 text-white rounded-lg shadow-lg space-y-6 max-w-md mx-auto'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-2'>
                        ENDEREÇO DO LOCAL
                    </h1>
                    <p className='text-lg'>Camaquã - RS</p>
                    <p className='text-lg'>Rua Treze de Maio, 90</p>
                </div>
                <div className='w-full h-64 overflow-hidden rounded-lg shadow-md'>
                    <GoogleMaps />
                </div>
            </div>
        </div>
    );
}
