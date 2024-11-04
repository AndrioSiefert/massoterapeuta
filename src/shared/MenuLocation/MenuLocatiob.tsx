import { Link, useLocation } from 'react-router-dom';

interface MenuLocationProps {
    children: React.ReactNode;
    to: string;
}

export default function MenuLocation({ children, to }: MenuLocationProps) {
    const location = useLocation();

    return (
        <Link to={to}>
            <h1
                className={
                    location.pathname === to
                        ? 'text-medical-blue'
                        : 'text-white'
                }
            >
                {children}
            </h1>
        </Link>
    );
}
