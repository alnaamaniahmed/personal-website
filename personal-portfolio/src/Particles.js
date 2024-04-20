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
    fpsLimit: isMobile ? 60 : 120,
    interactivity: {
      events: {
        onClick: {
          enable: !isMobile,
          mode: "push",
        },
        onHover: {
          enable: !isMobile,
          mode: 'repulse',
        },
      },
      modes: {
        push: {
          distance: 150,
          duration: 15,
        },
        repulse: {
          distance: 100,
          duration: 0.2
        },
      },
    },
    particles: {
      color: {
        value: "#00000",
      },
      links: {
        color: "#892cdc",
        distance: isMobile ? 150 : 175,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: isMobile ? 120 : 140,
      },
      opacity: {
        value: 0.5,
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

if (!init) {
  return <div>Loading particles...</div>;
}

return (
  <Particles
    id={props.id}
    particlesLoaded={particlesLoaded}
    options={options}
  />
);
};

export default ParticlesComponent;