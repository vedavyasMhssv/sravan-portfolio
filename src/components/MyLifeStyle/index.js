import React from "react";
import styles from "./index.module.css";
function MyLifestyle() {
  return (
    <div>
      MyLifestyle
      <div
        style={{
          minHeight: "120px",
          backgroundColor: "red",
          display: "flex",
          maxWidth: "80%",
          marginInline: "auto",
        }}
        className={styles.container}
      >
        <div className={styles.item}>
          <div style={{ backgroundColor: "blue", minHeight: "100px" }}></div>
        </div>
        <div className={styles.item}>
          <div style={{ backgroundColor: "cyan", minHeight: "100px" }}></div>
        </div>
        <div className={styles.item}>
          <div style={{ backgroundColor: "yellow", minHeight: "100px" }}></div>
        </div>
        <div className={styles.item}>
          <div style={{ backgroundColor: "green", minHeight: "100px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default MyLifestyle;
