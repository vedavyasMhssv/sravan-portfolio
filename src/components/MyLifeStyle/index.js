import React from "react";
import styles from "./index.module.css";
function MyLifestyle() {
  return (
    <div>
      MyLifestyle in progress currently
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
          <div
            style={{ backgroundColor: "lightgray", minHeight: "100px" }}
          ></div>
        </div>
        <div className={styles.item}>
          <div
            style={{ backgroundColor: "lightgray", minHeight: "100px" }}
          ></div>
        </div>
        <div className={styles.item}>
          <div
            style={{ backgroundColor: "lightgray", minHeight: "100px" }}
          ></div>
        </div>
        <div className={styles.item}>
          <div
            style={{ backgroundColor: "lightgray", minHeight: "100px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MyLifestyle;
