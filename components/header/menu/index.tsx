import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import styles from "./style.module.scss";
import Link from "./link";

const menu = [
  {
    title: "Projects",
    description: "To See Everything",
    images: ["Larosa.png", "netflix.png"],
  },
  {
    title: "About",
    description: "About Me",
    images: ["Amgaa.JPG", "hacker.jpeg"],
  },
  {
    title: "Contact",
    description: "To Send a FAX",
    images: ["contact1.jpg", "contact2.jpg"],
  },
];

export default function index({ closeMenu }: any) {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} />;
        })}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}
      >
        <a href="https://www.facebook.com/profile.php?id=100043903941322">FB</a>
        <a href="https://github.com/Amgalanbaatar888">GITHUB</a>
        <a href="https://www.instagram.com/yesoke_snw/">IG </a>
      </motion.div>
    </motion.div>
  );
}
