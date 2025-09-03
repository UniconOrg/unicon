import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';

import './AppLayout.css'; // Puedes crear un CSS para estilos adicionales si lo deseas
import './AppBackground.css'; // Importa el CSS del fondo
import UAppBar from '../../../app_bar/presentation/UAppBar';
import Footer from '../../../footer/presentation/Footer';
import AppBackground from './AppBackground';
import ModernBackground from './ModernBackground';

type AppLayoutProps = {
  children: ReactNode; // Define a children como un prop
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrolled(true); // Scroll hacia abajo, ocultar barra
      } else {
        setIsScrolled(false); // Scroll hacia arriba, mostrar barra
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <AppBackground />
      <ModernBackground />
      <div
        style={{
          ...styles.appBarContainer,
          transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
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
