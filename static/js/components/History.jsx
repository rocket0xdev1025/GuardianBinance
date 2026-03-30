import { useState, useEffect } from "react";

const tweetImages = Array.from({ length: 12 }, (_, i) => `/images/tweet${i + 1}.png`);

const History = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [currentTweetIndex, setCurrentTweetIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const tweetInterval = setInterval(() => {
      setCurrentTweetIndex((prevIndex) => (prevIndex + 1) % tweetImages.length);
    }, 4000); // Change tweet every 4 seconds

    return () => clearInterval(tweetInterval);
  }, []);

  const styles = {
    historyContainer: {
      position: "relative",
      marginTop: isMobile ? "-100px" : "-100px", // Moves the section up while keeping visibility
      marginBottom: isMobile ? "-10px" : "-40px",
      width: "100vw",
      height: isMobile ? "350px" : "600px", // Adjusted height to compensate for the negative margin
      backgroundImage: "url('/images/history2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center", // Ensures the top is visible
      backgroundRepeat: "no-repeat",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      overflow: "hidden",
      zIndex: "3",
    },
    carouselContainer: {
      position: "absolute",
      bottom: isMobile ? "20%" : "30%",
      width: isMobile ? "80vw" : "70vw",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0, 0, 0, 0.7)", // Dark semi-transparent background
      boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.8)", // Blood-red glow effect
      border: "2px solid rgba(255, 0, 0, 0.8)", // Red battle-like border
      padding: "20px",
      borderRadius: "10px",
      transition: "opacity 0.5s ease-in-out",
    },
    tweetImage: {
      width: "100%", // Ensures the image scales properly inside the container
      maxHeight: "200px", // Limits height for consistency
      objectFit: "contain", // Ensures full image is visible without distortion
    },
  };

  return (
    <div style={styles.historyContainer}>
      {/* Auto-moving tweet carousel with images */}
      <div style={styles.carouselContainer}>
        <img src={tweetImages[currentTweetIndex]} alt={`Tweet ${currentTweetIndex + 1}`} style={styles.tweetImage} />
      </div>
    </div>
  );
};

export default History;
