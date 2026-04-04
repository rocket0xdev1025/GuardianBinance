import { useState, useEffect } from "react";

const Connect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    connectContainer: {
      position: "relative",
      width: "100vw",
      height: isMobile ? "95vh" : "80vh",
      backgroundImage: "url('/images/connect.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      overflow: "hidden",

    },
    buttonContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "top-center" : "center",
      justifyContent: "center",
      gap: isMobile ? "20px" : "50px",
      position: "relative",
      zIndex: 2, // Keeps buttons above shadow
    },
    button: {
      width: isMobile ? "45vw" : "400px",
      height: "auto",
      transition: "all 0.2s ease-in-out",
      cursor: "pointer",
      borderRadius: "10px",
    },
    buttonHover: {
      filter: "drop-shadow(0px 0px 20px gold)", // Gold glow effect
    },
    buttonActive: {
      transform: "scale(0.95)", // Press effect
    },
    disclaimerContainer: {
      position: "absolute",
      bottom: "10px",
      width: "80%",
      textAlign: "center",
      fontSize: isMobile ? "8px" : "18px",
      color: "white",
      fontWeight: "lighter",
      zIndex: 2, // Keeps it visible above background
      textShadow:
        "-1px -1px 0 black, 1px 1px 0 black, -1px 0 0 black, 1px 0 0 black, 0 3px 4px rgb(0, 0, 0), 0 -6px 7px rgba(0, 0, 0, 0.5)",
      
    },
  };

  return (
    <div style={styles.connectContainer}>
      
      {/* Buttons Container */}
      <div style={styles.buttonContainer}>
        {/* Telegram Button */}
        <img
          src="/images/tgbtn.png"
          alt="Telegram"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.filter = styles.buttonHover.filter)}
          onMouseLeave={(e) => (e.target.style.filter = "none")}
          onMouseDown={(e) => {
            e.target.style.transform = styles.buttonActive.transform;
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          onClick={() => window.open("https://t.me/bnbguardian_entry", "_blank")}
        />

        {/* X (Twitter) Button */}
        <img
          src="/images/xbtn.png"
          alt="X (Twitter)"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.filter = styles.buttonHover.filter)}
          onMouseLeave={(e) => (e.target.style.filter = "none")}
          onMouseDown={(e) => {
            e.target.style.transform = styles.buttonActive.transform;
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          onClick={() => window.open("https://x.com/bnbguardian_x", "_blank")}
        />

        {/* DEX Screener Button */}
        <img
          src="/images/dexbtn.png"
          alt="DEX Screener"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.filter = styles.buttonHover.filter)}
          onMouseLeave={(e) => (e.target.style.filter = "none")}
          onMouseDown={(e) => {
            e.target.style.transform = styles.buttonActive.transform;
          }}
          onMouseUp={(e) => {
            e.target.style.transform = "scale(1)";
          }}
          onClick={() => window.open("https://dexscreener.com/bsc/0x14c1c72adf5459280f41820af70f76d7d0bc4444", "_blank")}
        />
      </div>

      {/* Disclaimer Text */}
      <div style={styles.disclaimerContainer}>
        COPYRIGHT ©2026 币安的守护者. LEGAL DISCLAIMER: $币安的守护者 IS A MEME COIN WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL RETURN. 
        IT IS COMPLETELY USELESS AND ONLY FOR ENTERTAINMENT PURPOSES. WHEN YOU BUY $币安的守护者 YOU ARE AGREEING TO THIS DISCLAIMER.
      </div>
    </div>
  );
};

export default Connect;
