import './Body.css';
import CountDown from '../components/CountDown';
import { Button, styled } from '@mui/material';

const RegisterButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    border: '3px solid transparent',
    borderColor: '#a8329e',
    color: 'white',
    fontSize: '1.2rem',
    marginTop: '2em',
    
    
    '&:hover': {
      borderColor: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
  }));

export default function Body() {
    return (
        <div className="body" id="Inicio">
            <div className='content'>
                <img src="/unicon.png" alt="unicon" className="unicon-image" />
                <p className="mission">Un faro de inspiración y comunidad para los visionarios del mañana.</p>
                <CountDown />
                <RegisterButton >
                    ¡Registrarme!
                </RegisterButton>
                <p style={
                    {
                        fontSize: '1rem',
                    }
                }>Proximamente</p>
            </div>
        </div>
    );
}
