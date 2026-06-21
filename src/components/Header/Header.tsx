import styles from './Header.module.css';
import logoFoll from '../../assets/logo-foll.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoFoll} alt="Foll Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Foll</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><a href="#how-it-works">Cómo funciona</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#pricing">Precios</a></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="https://foll-frontend.vercel.app/login" target="_blank" rel="noopener noreferrer">
            <button className={styles.loginBtn}>Iniciar Sesión</button>
          </a>
          <a href="https://foll-frontend.vercel.app/register" target="_blank" rel="noopener noreferrer">
            <button className={styles.registerBtn}>Registrarse</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
