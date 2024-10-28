import './UDrawer.css';

import React from 'react';
import { Drawer } from '@mui/material';
import NavButton from '../../domain/entities/navButton';

interface UDrawerProps {
    open: boolean;
    onClose: () => void;
    onButtonClick(navButtonData: NavButton): void;
}

const UDrawer: React.FC<UDrawerProps> = ({ open, onClose }) => {


    const manejarScroll = (id_element: string) => {

        onClose();

        // Si ya está en '/', simplemente hacer el scroll
        const elemento = document.getElementById(id_element);
        elemento?.scrollIntoView({ behavior: 'smooth' });

    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div className='drawer'>
                <a className="nav-item" onClick={() => { manejarScroll("ticket-section") }}>
                    Boletos

                    <img src="/bar_icons/ticket.svg" alt="logo" className="app-bar-icon" />

                </a>

                <a className="nav-item" onClick={() => { manejarScroll("ubication-section") }}>
                    Ubicación
                    <img src="/bar_icons/ubication.svg" alt="logo" className="app-bar-icon" />
                </a>

                <a className="nav-item" onClick={() => { manejarScroll("faq-section") }}>
                    FAQs
                    <img src="/bar_icons/faq.svg" alt="logo" className="app-bar-icon" />
                </a>

                <a className="nav-item" onClick={() => { manejarScroll("footer-section") }}>
                    Contacto
                    <img src="/bar_icons/contact.svg" alt="logo" className="app-bar-icon" />
                </a>
            </div>
        </Drawer>
    );
};

export default UDrawer;
