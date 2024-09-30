import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} UniconHub. Todos los derechos reservados.</p>
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
