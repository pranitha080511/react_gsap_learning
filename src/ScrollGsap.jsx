import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollGsap() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div style={{ height: "100vh" }}>Scroll Down ⬇️</div>

      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "blue",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        Scroll Me
      </div>

      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default ScrollGsap;
