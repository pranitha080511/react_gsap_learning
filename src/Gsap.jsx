import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gsap = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    
    const tl = gsap.timeline();

    tl.from(boxRef.current, {
      y: 200,
      backgroundColor: 'pink',
      duration: 2,
      ease: "power2.out"
    })
    .to(boxRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });

    
    tl.fromTo(
      boxRef.current,
      {
        x: -220,         
        rotation: 0,
      },
      {
        x: window.innerWidth - 200,  
        rotation: 360,
        backgroundColor: 'green',
        duration: 3,
        ease: "elastic.out(1, 0.4)",
        repeat: 1,     
        yoyo: true
      }
    );

  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: '200px',
        padding: '20px',
        backgroundColor: 'blue',  
        color: 'white',
        position: 'absolute',
        left: '-220px',          
        top: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p>Hello</p>
    </div>
  );
};

export default Gsap;
