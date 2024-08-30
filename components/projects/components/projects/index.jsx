"use client";
import React from "react";
import styles from "./style.module.scss";

export default function Project({ index, title, manageModal, route }) {
  const handleClick = () => {
    window.open(route, "_blank");
  };

  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      onClick={handleClick}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Development</p>
    </div>
  );
}
