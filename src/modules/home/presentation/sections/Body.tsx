import './Body.css';
import CountDown from '../components/CountDown';

/*
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
*/

export default function Body() {
    return (
        <div className="body" id="Inicio">
            <div className='content'>
                <img src="/unicon.png" alt="unicon" className="unicon-image" />
                <CountDown />
                <p className="mission">Un faro de inspiración y comunidad para los visionarios del mañana.</p>
                <p className="info">Boletos disponibles proximamente. </p>
            </div>
        </div>
    );
}
