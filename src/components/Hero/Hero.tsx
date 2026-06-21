import { ShieldCheck, PlayCircle } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const handleWatchVideo = () => {
    document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <ShieldCheck size={16} className={styles.badgeIcon} />
          <span>cuidado inteligente para el hogar</span>
        </div>

        <h1 className={styles.title}>Tu paz mental es nuestra prioridad</h1>

        <p className={styles.subtitle}>
          Monitoreo preventivo de caídas y salud para adultos mayores con tecnología de detección empática.
          Sin cámaras invasivas, solo serenidad vigilante.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>
            Empezar Ahora
            <span className={styles.arrow}>→</span>
          </button>
          <button className={styles.secondaryBtn} onClick={handleWatchVideo}>
            Ver video
            <PlayCircle size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
