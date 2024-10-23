import React, { CSSProperties, ReactNode } from 'react';

import './AppLayout.css'; // Puedes crear un CSS para estilos adicionales si lo deseas
import './AppBackground.css'; // Importa el CSS del fondo
import UAppBar from '../../../app_bar/presentation/UAppBar';
import Footer from '../../../footer/presentation/Footer';
import CursorAura from '../../../aura/presentation/CursorAura';
import AppBackground from './AppBackground';
import GridBackground from './GridBackgroud';

type AppLayoutProps = {
  children: ReactNode; // Define a children como un prop
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppBackground />
      <GridBackground />
      <div style={styles.appBarContainer}>
        <UAppBar />
      </div>
      {children}
      <Footer />
    </>
  );
};

const styles: {
  appBarContainer: CSSProperties,
} = {

  appBarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
  },

};

export default AppLayout;