import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Gsap = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    // 1️⃣ Animate boxes from bottom
    tl.from(".box", {
      y: 200,
      backgroundColor: 'pink',
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2   // 🔥 stagger added
    })

    // 2️⃣ Move them back to position
    .to(".box", {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2
    })

    // 3️⃣ Horizontal movement with rotation
    .fromTo(
      ".box",
      {
        x: -220,
        rotation: 0,
      },
      {
        x: window.innerWidth - 200,
        rotation: 360,
        backgroundColor: 'green',
        duration: 2,
        ease: "elastic.out(1, 0.4)",
        stagger: 0.3,  // 🔥 stagger effect
        repeat: 1,
        yoyo: true
      }
    );

  }, []);

  return (
    <>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="box"
          style={{
            width: '200px',
            padding: '20px',
            backgroundColor: 'blue',
            color: 'white',
            position: 'absolute',
            left: '-220px',
            top: `${100 + item * 80}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p>Hello {item}</p>
        </div>
      ))}
    </>
  );
};

export default Gsap;
