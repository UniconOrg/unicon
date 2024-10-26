import { useState } from 'react';
import './UAppBar.css';
import UDrawer from './molecules/UDrawer';
import { useNavigate } from 'react-router-dom';
import NavButton from '../domain/entities/navButton';



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

    return (
        <div className="appBar">
            <div className="logoContainer">
                <img src="/favicon.png" alt="logo" className="logo" />
            </div>
            <table className="nav-table">
                <tr>
                    <td>
                        <a href="#" className="nav-item">
                            Boletos

                            <img src="/bar_icons/ticket.svg" alt="logo" className="app-bar-icon" />

                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item">
                            Ubicación
                            <img src="/bar_icons/ubication.svg" alt="logo" className="app-bar-icon" />
                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item">
                            FAQs
                            <img src="/bar_icons/faq.svg" alt="logo" className="app-bar-icon" />
                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item">
                            Contacto
                            <img src="/bar_icons/contact.svg" alt="logo" className="app-bar-icon" />
                        </a>
                    </td>
                </tr>
            </table>

            <div className="right-container">
                <button className="login-button">Login</button>
                <div className="hamburger" onClick={handleHamburgerClick}>
                    &#9776;
                </div>
            </div>

            <UDrawer
                open={drawerOpen}
                onClose={handleCloseDrawer}
                onButtonClick={handleButtonClick}
            />
        </div>
    );
}
