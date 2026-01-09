import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1>Hi, I'm Your Name</h1>
        <p>Full Stack Developer | Designer | Creator</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
          View My Work
        </motion.button>
      </motion.div>
      <BackgroundAnimation />
    </section>
  );
};

const BackgroundAnimation = () => {
  return (
    <div className="background-animation">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-shape"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;