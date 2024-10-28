import { useState } from 'react';
import './UAppBar.css';
import UDrawer from './molecules/UDrawer';
import { useLocation, useNavigate } from 'react-router-dom';
import NavButton from '../domain/entities/navButton';
import GitHubButton from './atoms/GitHubButton';
import InstagramButton from './atoms/InstagramButton';
import navButtonsData from '../../app_bar/domain/use_case/navButtonsData';


export default function UAppBar() {
    const [_, setActiveButton] = useState<string>('Inicio');
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleButtonClick = (navButtonData: NavButton) => {
        setActiveButton(navButtonData.label);
        handleNavigate(navButtonData.path);
    };

    const handleHamburgerClick = () => {
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    const manejarScroll = (id_element: string, navigate: any, location: any) => {
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


        <div className="appBar">
            <div className="logoContainer">
                <a onClick={() => handleButtonClick(navButtonsData[0])}>

                    <img src="/favicon.png" alt="logo" className="logo" />
                </a>
            </div>
            <table className="nav-table">
                <tr>
                    <td>
                        <a href="#" className="nav-item" onClick={() => { manejarScroll("ticket-section", navigate, location) }}>
                            Boletos

                            <img src="/bar_icons/ticket.svg" alt="logo" className="app-bar-icon" />

                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item" onClick={() => { manejarScroll("ubication-section", navigate, location) }}>
                            Ubicación
                            <img src="/bar_icons/ubication.svg" alt="logo" className="app-bar-icon" />
                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item" onClick={() => { manejarScroll("faq-section", navigate, location) }}>
                            FAQs
                            <img src="/bar_icons/faq.svg" alt="logo" className="app-bar-icon" />
                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item" onClick={() => { manejarScroll("footer-section", navigate, location) }}>
                            Contacto
                            <img src="/bar_icons/contact.svg" alt="logo" className="app-bar-icon" />
                        </a>
                    </td>
                </tr>
            </table>

            <div className="right-container">

                
                <ul className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px', marginBottom: '20px', }}>
                    <GitHubButton />
                    <InstagramButton />
                    <div style={{ width: "20px" }}></div>
                </ul>
            </div>

            <div className="hamburger" onClick={handleHamburgerClick}>
                    &#9776;
                </div>

            <UDrawer
                open={drawerOpen}
                onClose={handleCloseDrawer}
                onButtonClick={handleButtonClick}
            />
        </div>
    );
}
