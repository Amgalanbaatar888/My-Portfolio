"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import Landing from "../components/landing/index";
import Projects from "../components/Projects/index";
import Description from "../components/Description/index";
import SlidingImages from "../components/slidigImages/index";
import Contact from "../components/Contact/index";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
