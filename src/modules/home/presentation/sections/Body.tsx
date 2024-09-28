import './Body.css';
import CountDown from '../components/CountDown';

export default function Body() {
    return (
        <div className="body">
            <div className='content'>
                <img src="/unicon.png" alt="unicon" className="unicon-image" />
                <p className="mission">Un faro de inspiración y comunidad para los visionarios tecnológicos del mañana.</p>
                <CountDown />
            </div>
        </div>
    );
}
