import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const styles = {
    hero: {
      position: "relative",
      width: "100vw",
      height: isMobile ? "70vh" : "100vh",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
    nameImage: {
      position: "absolute",
      top: isMobile ? "15%" : "10%",
      left: "50%",
      filter: "brightness(60%)",
      transform: "translateX(-50%)",
      width: isMobile ? "95vw" : "80vw",
      height: isMobile ? "20vh" : "50vh"
    },
    bottomImage: {
      position: "absolute",
      bottom: 0,
      left: isMobile ? "55%" : "50%",
      transform: "translateX(-50%)",
      width: isMobile ? "500px" : "50vw",
    },
    button: {
      position: "absolute",
      padding: "20px 150px",
      fontSize: isMobile ? "14px" : "18px",
      fontWeight: "bold",
      cursor: "pointer",
      border: "none",
      borderRadius: "5px",
      background:
        "radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(184,134,11,0.9) 50%, rgba(218,165,32,1) 100%)",
      color: "#000",
      fontWeight: "bold",
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.9)",
    },

  };

  return (
    <div style={styles.hero}>
      <video autoPlay loop muted playsInline style={styles.video}>
        <source src="/images/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src="/images/NAME.png" alt="Name" style={styles.nameImage} />
      <img
        src="/images/soldier-transparent1.png"
        alt="Soldier"
        style={styles.bottomImage}
      />      
    </div>
  );
};

export default Hero;
