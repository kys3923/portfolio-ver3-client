import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'


export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <motion.div whileHover={{ scale: 1.25, rotate: 360 }} whileTap={{ scale: 1 }} onClick={scrollToTop}>
          <p>Top</p>
        </motion.div>
      )}
    </div>
  );
}
