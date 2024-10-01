import DiscordButton from '../../app_bar/presentation/atoms/DiscordButton';
import GitHubButton from '../../app_bar/presentation/atoms/GitHubButton';
import InstagramButton from '../../app_bar/presentation/atoms/InstagramButton';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} UniconHub. Todos los derechos reservados.</p>
        <ul className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px', marginBottom: '20px', }}>
          <GitHubButton />
          <InstagramButton />
          <DiscordButton />
        </ul>
        <ul className="footer-links">
          <li><a href="/about">Sobre nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/privacy">Política de privacidad</a></li>
          <li><a href="/terms">Términos de servicio</a></li>
        </ul>
      </div>
    </footer>
  );
};
