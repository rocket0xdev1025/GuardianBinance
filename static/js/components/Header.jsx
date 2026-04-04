import { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleCopyCA = () => {
    navigator.clipboard.writeText("0xcomingsoon");
    alert("Contract Address copied!");
  };

  const styles = {
    header: {
      position: "fixed",
      top: "25px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80vw",
      height: isMobile ? "50px" : "60px",
      background: "radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(184,134,11,0.9) 50%, rgba(218,165,32,1) 100%)",
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.9)",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      zIndex: 1000,

    },
    logo: {
      fontSize: isMobile ? "20px" : "28px",
      fontWeight: "bold",
      fontFamily: "Gideon Roman",
      textTransform: "uppercase",
      color: "transparent",
      textShadow:
        "-1px -1px 0 black, 1px 1px 0 black, -1px 0 0 black, 1px 0 0 black, 0 3px 4px rgba(255, 215, 0, 1), 0 -6px 7px rgba(0, 0, 0, 0.5)",
      position: "relative",
      cursor: "pointer",
    },

    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
      fontSize: "20px",
    },
    navLinksMobile: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      fontSize: "20px",
      alignItems: "center",
      padding: "0",
    },
    navItem: {
      cursor: "pointer",
      color: "black",
    },
    buttons: {
      display: "flex",
      gap: isMobile ? 0 : "10px",
      alignItems: "center",
    },
    button: {
      border: "1px solid black",
      borderRadius: "8px",
      width: isMobile ? "none" : "150px",
      background: "linear-gradient(to top, #ffd700 0%, #daa520 100%)",
      fontWeight: isMobile ? "normal" : "bold",
      fontSize: isMobile ? "8px" : "14px",
      color: "black",
      cursor: "pointer",
      padding: isMobile ? "8px" : "10px",
      margin: isMobile ? "5px" : 0,
      boxShadow: isMobile ? "-2px -2px 2px rgba(0, 0, 0, 0.4), -2px -2px 5px rgba(0, 0, 0, 0.3)" :
        "-2px -2px 5px rgba(0, 0, 0, 0.4), -2px -2px 10px rgba(0, 0, 0, 0.3)",
    },
    hamburgerButton: {
      border: "1px solid black",
      borderRadius: "8px",
      width: "40vw",
      background: "linear-gradient(to top, #ffd700 0%, #daa520 100%)",
      fontWeight: "bold",
      fontSize: "12px",
      color: "black",
      cursor: "pointer",
      padding: "15px",
      margin: "10px",
      boxShadow: "-2px -2px 2px rgba(0, 0, 0, 0.4), -2px -2px 5px rgba(0, 0, 0, 0.3)",
    },
    hamburger: {
      fontSize: "24px",
      cursor: "pointer",
      marginLeft: "10px",
    },
    mobileMenu: {
      position: "fixed",
      top: "300px",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "60vw",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle, rgba(255,215,0,0.9) 0%, rgba(184,134,11,1) 50%, rgba(218,165,32,1) 100%)",
      borderRadius: "12px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.7)",
      zIndex: 1100,
      textAlign: "center",
      padding: "30px",
    },
    overlay: {
      position: "fixed",
      top: -100,
      left: -100,
      width: "200vw",
      height: "200vh",
      background: "rgba(0, 0, 0, 0.7)",
      zIndex: 1000,
    },
    closeButton: {
      position: "absolute",
      top: "15px",
      right: "15px",
      cursor: "pointer",
      fontSize: "24px",
    },
  };

  return (
    <nav style={styles.header}>
      <div style={styles.logo} onClick={scrollToTop}>币安的守护者</div>
      {!isMobile && (
        <ul style={styles.navLinks}>
          <li style={styles.navItem} onClick={() => handleScrollTo("about")}>ABOUT</li>
          <li style={styles.navItem} onClick={() => handleScrollTo("tokenomics")}>TOKENOMICS</li>
          <li style={styles.navItem} onClick={() => handleScrollTo("connect")}>CONNECT</li>
        </ul>
      )}
      <div style={styles.buttons}>
        <button style={styles.button} onClick={handleCopyCA}>COPY CA</button>
        <button style={styles.button} onClick={() => window.open("https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon", "_blank")}>BUY NOW</button>
        {isMobile && (<div style={styles.hamburger} onClick={() => setMenuOpen(true)}>&#9776;</div>)}
      </div>
      {isMobile && menuOpen && (
        <>
          <div style={styles.overlay} onClick={() => setMenuOpen(false)}></div>
          <div style={styles.mobileMenu}>
            <div style={styles.closeButton} onClick={() => setMenuOpen(false)}>✖</div>
            <ul style={styles.navLinksMobile}>
              <li style={styles.navItem} onClick={() => handleScrollTo("about")}>ABOUT</li>
              <li style={styles.navItem} onClick={() => handleScrollTo("tokenomics")}>TOKENOMICS</li>
              <li style={styles.navItem} onClick={() => handleScrollTo("connect")}>CONNECT</li>
            </ul>
            <button style={styles.hamburgerButton} onClick={handleCopyCA}>COPY CA</button>
            <button style={styles.hamburgerButton} onClick={() => window.open("https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon", "_blank")}>BUY NOW</button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
