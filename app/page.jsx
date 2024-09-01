"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import Landing from "../components/landing/index";
import Projects from "../components/projects/Projects";
import Description from "../components/description/Description";
import SlidingImages from "../components/slidigImages/index";
import Contact from "../components/contact/Contact";
import Preloader from "../components/prelouder/Prelouder";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
