import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

function GsapText() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.to(headingRef.current, {
      duration: 3,
      text: "Animating Text with GSAP in React",
      ease: "power1.out",
    });
    

    gsap.fromTo(
      paraRef.current,
      {
        y: 80,          
        opacity: 0,
        text: "",
      },
      {
        y: 0,
        opacity: 1,
        duration: 5,
        delay: 2,       
        text:
        "GSAP allows you to create powerful and smooth text animations in React applications. " +
        "By using the TextPlugin, we can animate long paragraphs without re-rendering components. " +
        "This approach is fast, efficient, and widely used in modern landing pages, portfolios, " +
        "and storytelling websites.",
      ease: "none",
    });
  }, []);

  return (
    <div style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      <h1
        ref={headingRef}
        style={{ fontSize: "48px", marginBottom: "30px" }}
      ></h1>

      <p
        ref={paraRef}
        style={{ fontSize: "20px", lineHeight: "1.6" }}
      ></p>
    </div>
  );
}

export default GsapText;
