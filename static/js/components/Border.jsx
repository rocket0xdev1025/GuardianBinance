import { useState, useEffect } from "react";

const Border = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    borderContainer: {
      position: "relative",
      width: "100vw",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    metalBorder: {
      width: isMobile ? "250vw" : "100vw",
      height: isMobile ? "50px" : "100px",
      position: "relative",
      marginBottom: "0px", // Lifts the image slightly
      filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.9))", // Alternative shadow
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.9)", // Stronger shadow
    },
  };

  return (
    <div style={styles.borderContainer}>
      {/* Top Metal Border with Visible Shadow */}
      <img
        src="/images/metal-border.png"
        alt="Top Border"
        style={styles.metalBorder}
      />
    </div>
  );
};

export default Border;
