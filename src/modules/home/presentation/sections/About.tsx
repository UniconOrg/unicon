import { Button, styled } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import './About.css';

const UButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    border: '3px solid transparent',
    borderColor: '#a8329e',
    color: 'white',
    fontSize: '1rem',
    marginTop: '2em',


    '&:hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: 'transparent',
    },
}));

export default function About() {

    const handleClick = () => {
        window.open('https://www.instagram.com/unicon.hub/', '_blank'); // Cambia esta URL a tu repositorio
    };

    return (
        <>
            <div className="about-cards-container">

                <div className="about-card">
                    <h3>Quiero ser Speaker</h3>
                    <p>Comparte tu conocimiento en nuestro evento.</p>
                    <div onClick={handleClick}>

                        <UButton>Me gustaria ser Speaker</UButton>
                    </div>
                </div>
                <div className="about-card">
                    <h3>Quiero ser Sponsor</h3>
                    <p>Apoya nuestro evento y gana visibilidad.</p>
                    <p>Envianos un correo a soporte@unicon.mx</p>
                </div>
            </div>
        </>

    );
};
