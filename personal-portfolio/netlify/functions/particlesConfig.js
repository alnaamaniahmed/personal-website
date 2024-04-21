exports.handler = async function(event, context) {
    const userAgent = event.headers['user-agent'].toLowerCase();
    const isMobile = userAgent.includes('mobi');

    const options = {
        background: {
            color: {
              value: "#262626",
            },
          },
          fpsLimit: isMobile ? 60 : 144,
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
              distance: isMobile ? 130 : 100,
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
              value: isMobile ? 98 : 150,
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
    };

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(options)
    };
};