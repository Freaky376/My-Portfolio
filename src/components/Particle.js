import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: ["#ffffff", "#050606ff", "#ff9999"],
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            speed: 0.15,
            random: true,
            outMode: "out",
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.1,
              sync: false,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              size: 3,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            push: {
              particles_nb: 5,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
