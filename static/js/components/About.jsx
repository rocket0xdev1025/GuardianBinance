import { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    aboutContainer: {
      position: "relative",
      width: "100vw",
      height: isMobile ? "120vh" : "90vh",
      backgroundImage: "url('/images/red.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden",
    },

    shadowOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "50px", // Adjust the height of the shadow
      background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
      zIndex: 3, // Ensure it is above the background but below content
    },

    contentContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      width: "80vw",
      maxWidth: "1200px",
      alignItems: isMobile ? "top center" : "center",
      justifyContent: "space-between",
      padding: isMobile ? "60px 0" : "40px 0",
      minHeight: isMobile ? 0 : "60vh",
      position: "relative",
      zIndex: 2, // Keep it above the shadow
    },
    leftColumn: {
      width: isMobile ? "100%" : "50%",
      textAlign: isMobile ? "center" : "left",
      padding: isMobile ? "0px" : "40px",
      color: "white",
      position: "relative",
      zIndex: 2,
    },
    header: {
      fontSize: isMobile ? "24px" : "42px",
      fontWeight: "bold",
      fontFamily: "Gideon Roman",
      textTransform: "uppercase",
      marginBottom: "20px",
      color: "rgb(189, 189, 189)",
      textShadow:
        "-1px -1px 0 black, 3px 3px 0 black, -1px 0 0 black, 1px 0 0 black, 0 3px 4px rgb(0, 0, 0), 0 -6px 7px rgba(0, 0, 0, 0.5)",
    },
    text: {
      fontSize: isMobile ? "12px" : "18px",
      lineHeight: "1.6",
      color: "rgb(189, 189, 189)",
      textShadow:
        "-1px -1px 0 black, 3px 3px 0 black, -1px 0 0 black, 1px 0 0 black, 0 3px 4px rgb(0, 0, 0), 0 -6px 7px rgba(0, 0, 0, 0.5)",
    },
    rightColumn: {
      width: isMobile ? "100%" : "50%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      position: "relative",
      paddingBottom: isMobile ? "3vh" : 0,
    },
    soldierImage: {
      position: isMobile ? "relative" : "absolute",
      bottom: isMobile ? 0 : "-420px",
      right: isMobile ? "0px" : "0%",
      width: isMobile ? "100%" : "140%",
      maxWidth: isMobile ? "600px" : "900px",
      opacity: "0.9",
      zIndex: 1,
    },
  };

  return (
    <div style={styles.aboutContainer}>
      {/* Shadow effect on top */}
      <div style={styles.shadowOverlay}></div>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        {/* Left Column - Text */}
        <div style={styles.leftColumn}>
          <h2 style={styles.header}>ABOUT 币安的守护者</h2>
          <p style={styles.text}>
            In the grand digital age, where empires are no longer built with stone and mortar but with code and cryptographic might,
            there exists a legion known as the 币安的守护者. These are not just traders or investors; they are warriors of the decentralized frontier,
            bound by their allegiance to the ever-growing dominion of Binance.
            <br /><br />
            The true power of the 币安的守护者 lies within the community itself—the traders, the builders, the dreamers.
            They are the lifeblood of the Binance ecosystem, their faith in the mission manifesting in every trade, every contribution,
            and every step toward innovation.
            <br /><br />
            To be a Binancian is to be part of something greater—a movement, a revolution, a relentless march toward financial freedom.
            They are the warriors who make Binance what it is, from its deepest core to the furthest reaches of its influence.
          </p>
        </div>

        {/* Right Column - Image (Behind the Text) */}
        <div style={styles.rightColumn}>
          <img src="/images/about.png" alt="Binancian Soldier" style={styles.soldierImage} />
        </div>
      </div>
    </div>
  );
};

export default About;
