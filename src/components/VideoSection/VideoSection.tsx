import { Play, Shield, Bell, HeartPulse } from 'lucide-react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.section} id="video">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Play size={14} fill="currentColor" />
            <span>Video Explicativo</span>
          </div>
          <h2 className={styles.title}>Mira Foll en Acción</h2>
          <p className={styles.subtitle}>
            Descubre cómo cuidamos de los adultos mayores de forma no invasiva, 
            garantizando su seguridad y la tranquilidad de sus familias.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/I7AkZu0FCTM"
              title="Foll - Video Explicativo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <Shield size={20} className={styles.icon} />
            </div>
            <h4>100% Privacidad</h4>
            <p>Monitoreo por radar de movimiento. Cero cámaras, cero vulneración a su intimidad.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <Bell size={20} className={styles.icon} />
            </div>
            <h4>Detección de Caídas</h4>
            <p>Algoritmos avanzados alertan al instante a familiares y servicios de emergencia.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <HeartPulse size={20} className={styles.icon} />
            </div>
            <h4>Salud Preventiva</h4>
            <p>Analiza patrones de sueño y actividad diaria para prevenir riesgos de salud.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
