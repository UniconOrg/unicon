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
                            Boletos <i className="fas fa-ticket-alt"></i>
                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item">
                            Ubicación <i className="fas fa-map-marker-alt"></i>
                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item">
                            FAQs <i className="fas fa-question-circle"></i>
                        </a>
                    </td>
                    <td>
                        <a href="#" className="nav-item">
                            Contacto <i className="fas fa-headset"></i>
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
