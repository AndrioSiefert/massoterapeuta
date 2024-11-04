import MenuLocation from '../../shared/MenuLocation/MenuLocatiob';

export default function Header() {
    return (
        <header className='flex flex-col items-center justify-between bg-medical-gray text-white lg:flex-row'>
            <div className='flex items-center'>
                <img
                    src='images/logo.png'
                    alt='logo'
                    className='w-24 lg:w-48'
                />
            </div>
            <div className='flex items-center space-x-4 mr-6'>
                <MenuLocation to='/'>INICIO</MenuLocation>
                <MenuLocation to='/massagens'>MASSAGENS</MenuLocation>
                <MenuLocation to='/contato'>CONTATO</MenuLocation>
            </div>
        </header>
    );
}
