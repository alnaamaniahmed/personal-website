import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState} from "react";
import { loadSlim } from "@tsparticles/slim"; 



const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


const particlesLoaded = (container) => {
  console.log(container);
};

const isMobile = useMemo(() => window.innerWidth <= 768, []);
const options = useMemo(
  () => ({
    background: {
      color: {
        value: "#262626",
      },
    },
    fpsLimit: isMobile ? 30 : 120,
    interactivity: {
      events: {
        onClick: {
          enable: !isMobile,
          mode: "repulse",
        },
        onHover: {
          enable: !isMobile,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: "#892cdc",
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 100,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }),
  [isMobile],
);


if (init) {
  return (
    <Particles
      id={props.id}
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}

return <></>;
};

export default ParticlesComponent;