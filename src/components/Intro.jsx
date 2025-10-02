import React, { useEffect, useState } from "react";
import SevketName from "./SevketName";

function Intro({ onFinish }) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setZoom(700);
    }, 700);

    const finishTimer = setTimeout(onFinish, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.name, transform: `scale(${zoom})` }}>
        <SevketName />
      </h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#000000",
  },
  name: {
    fontSize: "4rem",
    transition: "transform 5s ease, opacity 1.5s ease",
    fill: "#f1faee",
  },
};

export default Intro;
