import { useState } from 'react';
import UButtonAppBar from './atoms/UButtonAppBar';
import './UAppBar.css';
import UDrawer from './molecules/UDrawer';
import GitHubButton from './atoms/GitHubButton';
import InstagramButton from './atoms/InstagramButton';


export default function UAppBar() {
    const [activeButton, setActiveButton] = useState<string>('Inicio');
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleButtonClick = (label: string) => {
        setActiveButton(label);
        const element = document.getElementById(label);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Scroll suave hacia el elemento
        }
    };

    const handleHamburgerClick = () => {
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <div className="appBar">
            <div className="logoContainer">
                <img src="/favicon.png" alt="logo" className="logo" />
            </div>
            <div className="buttonsContainer">
                {['Inicio', 'FAQ' ].map((label) => (
                    <UButtonAppBar
                        key={label}
                        label={label}
                        isActive={activeButton === label}
                        onClick={() => handleButtonClick(label)}
                    />
                ))}
                <GitHubButton />
                <InstagramButton />
            </div>
            <div className="hamburger" onClick={handleHamburgerClick}>
                { }
                &#9776; { }
            </div>

            <UDrawer
                open={drawerOpen}
                onClose={handleCloseDrawer}
                onButtonClick={handleButtonClick}
            />
        </div>
    );
}
