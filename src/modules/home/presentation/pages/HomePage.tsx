
import { CSSProperties } from 'react';
import Body from "../sections/Body";
import About from '../sections/About';
import Mision from '../sections/Mision';
import UbicationSection from '../sections/Ubication';

export default function HomePage() {
  return (
    <div style={styles.container} id="Inicio">

      <div style={styles.content}>
        <Body />
      </div>
      
        <UbicationSection />
      <div style={styles.content}>
        <Mision />
        <About />
      </div>

    </div>
  );
}

const styles: {
  container: CSSProperties,
  appBarContainer: CSSProperties,
  content: CSSProperties,
} = {
  container: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  appBarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
  },
  content: {
    paddingTop: '64px',
  },
};

