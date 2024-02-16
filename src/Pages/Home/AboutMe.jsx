import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import drummingPic from "../../assets/portfoliopic.jpeg"

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
          <motion.div
            className="about--section--img"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img src={drummingPic} alt="About Me" />
          </motion.div>
          <motion.div
            className="hero--section--content--box about--section--box"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="hero--section--content">
              <h1 className="skills--section--heading">About Me</h1>
              <p className="text-lg">
                Hello everyone, my name is Julius DeAngelis and among other
                things I am a software developer, percussionist, and also a
                South Carolina native. Throughout the recent past I’ve toured
                the US and Canada with multiple musical acts, I’ve worked on
                film sets doing production assistant work, and I’ve even worked
                as a sous chef at a popular restaurant in Charleston. Despite my
                multifaceted history, nowadays I’m well into a career in
                software development. Feel free to check out some of my
                projects, work history, or to contact me through any of the
                links provided below.
              </p>
            </div>
          </motion.div>
    </section>
  );
}
