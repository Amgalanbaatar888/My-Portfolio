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

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      gsap.to(window, {
        scrollTo: targetElement,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

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
        <div className={styles.nav}>
          <Magnetic>
            <div
              style={{ color: "white", fontWeight: "bold" }}
              className={styles.el}
            >
              <a href="#work" onClick={handleSmoothScroll}>
                Work
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div
              style={{ color: "white", fontWeight: "bold" }}
              className={styles.el}
            >
              <a href="#about" onClick={handleSmoothScroll}>
                About
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div
              style={{ color: "white", fontWeight: "bold" }}
              className={styles.el}
            >
              <a href="#contact" onClick={handleSmoothScroll}>
                Contact
              </a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
