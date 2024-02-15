import { motion } from "framer-motion";
import { TiStarOutline } from "react-icons/ti";
// @ts-ignore
import resume from "../../assets/Julius_Resume_2024.pdf";
import { Link } from "react-scroll";

export default function HeroSection() {

  return (
    <section id="heroSection" className="hero--section">
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="hero--section--content--box">
              <div className="hero--section--content">
                <h1>Julius DeAngelis</h1>
                <div className="divider-custom divider-light">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <TiStarOutline />
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <p className="hero--section-description">
                  Software Developer - Musician
                </p>
                <div className="hero--btn">
                  <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button
                      style={{ marginTop: 25 }}
                      className="btn btn-primary"
                    >
                      Get In Touch
                    </button>
                  </Link>
                  <a href={resume} target="_blank">
                    <button
                      style={{ marginTop: 25 }}
                      className="btn btn-primary"
                    >
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="hero--section--img">
              <img src="./img/BIOPIC4.jpg" alt="Hero Section" />
            </div>
          </motion.div>
    </section>
  );
}
