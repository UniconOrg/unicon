import { Button, styled } from '@mui/material';
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
    return (
        <>

            <div className="about-cards-container">
                
                <div className="about-card">
                    <h3>Quiero ser Speaker</h3>
                    <p>Comparte tu conocimiento en nuestro evento.</p>
                    <UButton>Me gustaria ser Speaker</UButton>
                </div>
                <div className="about-card">
                    <h3>Quiero ser Sponsor</h3>
                    <p>Apoya nuestro evento y gana visibilidad.</p>
                    <UButton>Megustaria ser Sponsor</UButton>
                </div>
            </div>
            
        </>

    );
};
