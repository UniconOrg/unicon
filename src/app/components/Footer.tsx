"use client";
import './Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function InstagramButton() {
  const handleClick = () => {
    window.open('https://www.instagram.com/unicon.hub/', '_blank'); // Cambia esta URL a tu repositorio
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      <InstagramIcon />
    </div>

  );
};

function GitHubButton() {
  const handleClick = () => {
    window.open('https://github.com/reitmas32/unicon', '_blank'); // Cambia esta URL a tu repositorio
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      <GitHubIcon />
    </div>

  );
};

export default function Footer() {
  return (
    <footer className="footer" id='footer-section'>
      <div className="footer-content text-2xl">
        <p className="mb-10">&copy; {new Date().getFullYear()} UniconHub. Todos los derechos reservados.</p>
        <ul className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px', marginBottom: '20px', }}>
          <GitHubButton />
          <InstagramButton />
        </ul>

      </div>
    </footer>
  );
};
