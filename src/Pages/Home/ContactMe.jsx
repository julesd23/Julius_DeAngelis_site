import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="Contact"
      className="contact--section"
    >
      <div>
        <h2 className="skills--section--heading">Contact Me</h2>
      </div>
      <div className="contact--form--container">
        <h2 className="contact--me">juliusdeangelis@gmail.com</h2>
        <h2 className="contact--me">
          <a
            style={{ textDecoration: "none", color: "#19bc9b" }}
            href="https://www.linkedin.com/in/julius-deangelis-295ba3208/"
            target="_blank"
          >
            LinkedIn
          </a>
        </h2>
        <h2 className="contact--me">
          <a
            style={{ textDecoration: "none", color: "#19bc9b" }}
            href="https://github.com/julesd23"
            target="_blank"
          >
            Github
          </a>
        </h2>
        <h2 className="contact--me">
          <a
            style={{ textDecoration: "none", color: "#19bc9b" }}
            href="https://www.instagram.com/el__sapito__/?hl=en"
            target="_blank"
          >
            Instagram
          </a>
        </h2>
      </div>
    </motion.section>
  );
}
