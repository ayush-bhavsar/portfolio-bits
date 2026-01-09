import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about"
    >
      <div className="container">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-text"
        >
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with experience in creating beautiful and functional web applications.
            I love turning ideas into reality through code.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open source,
            or enjoying outdoor activities.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          <div className="placeholder-image">Your Photo</div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;