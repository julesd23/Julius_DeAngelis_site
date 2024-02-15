// @ts-ignore
import { skills } from "../../data/index.jsx";
import { motion } from "framer-motion";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
          <>
            {skills?.map((item, index) => (
              <motion.div
                className="skills--section--card"
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (skills.length - 1 - index) * 0.1,
                }}
                key={item.id}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                <div className="skills--section--img">
                  {item.src}
                </div>
                <div className="skills--section--card--content">
                  <h3 className="skills--section--title">{item.title}</h3>
                  <p className="skills--section--description">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </>
      </div>
    </section>
  );
}
