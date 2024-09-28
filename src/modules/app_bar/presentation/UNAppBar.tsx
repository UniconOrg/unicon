import { useState } from 'react';
import UButtonAppBar from './atoms/UButtonAppBar';

export default function UNAppBar() {
    const [activeButton, setActiveButton] = useState<string>('Inicio');

    const handleButtonClick = (label: string) => {
        setActiveButton(label);
    };
    return (
        <div style={styles.appBar}>
            <div style={styles.logoContainer}>
                <img src="/favicon.png" alt="logo" style={styles.logo} />
            </div>
            <div style={styles.buttonsContainer}>
                {['Inicio', 'FAQ', 'Conducta'].map((label) => (
                    <UButtonAppBar
                        key={label}
                        label={label}
                        isActive={activeButton === label}
                        onClick={() => handleButtonClick(label)}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    appBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px 10px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: '40px',
        width: 'auto',
    },
    buttonsContainer: {
        display: 'flex',
        gap: '30px',
        marginTop: '10px',
        marginBottom: '10px',
    },

};