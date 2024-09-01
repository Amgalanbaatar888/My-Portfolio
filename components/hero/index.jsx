"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../../common/Magnetic";

export default function Index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p
            style={{ color: "white", fontWeight: "bold" }}
            className={styles.copyright}
          >
            ©
          </p>
          <div className={styles.name}>
            <p
              style={{ color: "white", fontWeight: "bold" }}
              className={styles.codeBy}
            >
              Code by
            </p>
            <p
              style={{ color: "white", fontWeight: "bold" }}
              className={styles.dennis}
            >
              Amgaa
            </p>
            <p
              style={{ color: "white", fontWeight: "bold" }}
              className={styles.snellenberg}
            >
              Hero
            </p>
          </div>
        </div>
        <div className="max-sm:hidden">
          <div className={styles.nav}>
            <Magnetic>
              <div
                style={{ color: "white", fontWeight: "bold" }}
                className={styles.el}
              >
                <a href="https://www.instagram.com/yesoke_snw/">Instagram</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div
                style={{ color: "white", fontWeight: "bold" }}
                className={styles.el}
              >
                <a href="https://github.com/Amgalanbaatar888">GitHub</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div
                style={{ color: "white", fontWeight: "bold" }}
                className={styles.el}
              >
                <a href="https://imgur.com/a/mczur6w">CV</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
