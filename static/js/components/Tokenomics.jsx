import { useState, useEffect } from "react";

const Tokenomics = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    tokenomicsContainer: {
      position: "relative",
      top: 0,
      width: "100vw",
      height: isMobile ? "100vh" : "170vh", // Ensures full viewport coverage
      backgroundImage: isMobile ? "url('/images/tokenomics-mobile.png')" : "url('/images/tokenomics.png')",
      backgroundSize: "cover", // Fills the container without stretching
      backgroundPosition: "top center", // Aligns from the top to prevent cropping
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",

    },
  };

  return <div style={styles.tokenomicsContainer}></div>;
};

export default Tokenomics;
