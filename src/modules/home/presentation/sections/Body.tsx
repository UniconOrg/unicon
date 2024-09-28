import { CSSProperties } from 'react';
import CountDown from '../components/CountDown';


export default function Body() {
    return (
        <div style={styles.body}>
            <img src="/unicon.png" alt="unicon" style={{ width: '70%' }} />
            <p style={styles.mission}>Un faro de inspiración y comunidad para los visionarios tecnológicos del mañana.</p>
            <CountDown/>
        </div>
    );
}

const styles: {
    body: CSSProperties,
    mission: CSSProperties,
} = {
    body: {
        width: '55%',
        height: '100vh',
        textAlign: 'center',
        alignContent: 'center',
        margin: 'auto',
    },
    mission: {
        fontSize: '1.5rem',
        marginTop: '20px',
    },
};