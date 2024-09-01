import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/roundedButton";

export default function index() {
  const phrase =
    "Detail-oriented software engineer with 1 year of experience in developing scalable applications and a strong background in JavaScript TypeScript and cloud technologies. Proficient in front-end development with expertise in React.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div className="">
      <div ref={description} className={styles.description}>
        <div className={styles.body}>
          <p className="max-sm:text-xl max-sm:m-0">
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p
            className="max-sm:hidden"
            variants={opacity}
            animate={isInView ? "open" : "closed"}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>
          <div className="max-sm:hidden" data-scroll data-scroll-speed={0.1}>
            <Rounded className={styles.button}>
              <a href="https://imgur.com/a/mczur6w">
                <p>Resume</p>
              </a>
            </Rounded>
          </div>
        </div>
      </div>
    </div>
  );
}
