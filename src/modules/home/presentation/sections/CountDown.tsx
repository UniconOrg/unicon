import './CountDown.css';
import CountDown from '../components/CountDown';

export default function CountDownSection() {
    return (
        <div className="count-down-section" id="CountDown">
            <div className='content'>
                <CountDown />
                <p className="mission">Un faro de inspiración y comunidad para los visionarios del mañana.</p>
            </div>
        </div>
    );
}
