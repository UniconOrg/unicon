import './UDrawer.css';

import React from 'react';
import { Drawer } from '@mui/material';
import NavButton from '../../domain/entities/navButton';
import { useLocation, useNavigate } from 'react-router-dom';

interface UDrawerProps {
    open: boolean;
    onClose: () => void;
    onButtonClick(navButtonData: NavButton): void;
}

const UDrawer: React.FC<UDrawerProps> = ({ open, onClose }) => {

    const navigate = useNavigate();

    const manejarScroll = (id_element: string, navigate: any, location: any) => {

        onClose();
        // Verificar si la ruta actual no es '/'
        if (location.pathname !== '/') {
            // Mover a la ruta '/'
            navigate('/', { replace: true });
            // Esperar a que se complete la navegación y luego hacer el scroll
            setTimeout(() => {
                const elemento = document.getElementById(id_element);
                elemento?.scrollIntoView({ behavior: 'smooth' });
            }, 300); // Puedes ajustar el tiempo de espera si es necesario
        } else {
            // Si ya está en '/', simplemente hacer el scroll
            const elemento = document.getElementById(id_element);
            elemento?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const location = useLocation();

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div className='drawer'>
                <a href="#" className="nav-item" onClick={() => { manejarScroll("ticket-section", navigate, location) }}>
                    Boletos

                    <img src="/bar_icons/ticket.svg" alt="logo" className="app-bar-icon" />

                </a>

                <a href="#" className="nav-item" onClick={() => { manejarScroll("ubication-section", navigate, location) }}>
                    Ubicación
                    <img src="/bar_icons/ubication.svg" alt="logo" className="app-bar-icon" />
                </a>

                <a href="/faq" className="nav-item">
                    FAQs
                    <img src="/bar_icons/faq.svg" alt="logo" className="app-bar-icon" />
                </a>

                <a href="#" className="nav-item" onClick={() => { manejarScroll("footer-section", navigate, location) }}>
                    Contacto
                    <img src="/bar_icons/contact.svg" alt="logo" className="app-bar-icon" />
                </a>
            </div>
        </Drawer>
    );
};

export default UDrawer;
