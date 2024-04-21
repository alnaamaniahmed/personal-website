import React, { useEffect, useState } from 'react';
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
    const [options, setOptions] = useState(null);
    const [init, setInit] = useState(false);

    useEffect(() => {
        fetch('/.netlify/functions/particlesConfig')
            .then(response => response.json())
            .then(data => {
                setOptions(data);
                initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                }).then(() => {
                    setInit(true);
                });
            })
            .catch(error => console.error('Failed to load particles config:', error));
    }, []);

        // Only render the Particles component if both `init` and `options` are set
    return init && options ? (
        <Particles id={props.id} options={options} />
    ) : null;
};

export default ParticlesComponent;