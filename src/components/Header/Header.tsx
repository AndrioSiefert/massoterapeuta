import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-medical-gray flex flex-col items-center justify-between p-4 lg:flex-row'>
            <Link to='/'>
                <img
                    src='images/logo.png'
                    alt='logo'
                    className='w-24 sm:w-32 md:w-40 lg:w-48'
                />
            </Link>
            <nav>
                <ul className='flex space-x-4'>
                    <li>
                        <Link to='/' className='text-white hover:text-gray-200'>
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/massagens'
                            className='text-white hover:text-gray-200'
                        >
                            MASSAGENS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/massagens'
                            className='text-white hover:text-gray-200'
                        >
                            CONTATO
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
