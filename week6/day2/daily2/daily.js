const planets = [
    { name: "Mercury", color: "grey", moons: [] },
    { name: "Venus", color: "yellow", moons: [] },
    { name: "Earth", color: "blue", moons: ["Moon"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
];

function createMoon() {
    const moon = document.createElement('div');
    moon.className = 'moon';
    return moon;
}

function createPlanet(planet) {
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.backgroundColor = planet.color;

    planet.moons.forEach(() => {
        planetDiv.appendChild(createMoon());
    });

    return planetDiv;
}

const section = document.querySelector('.listPlanets');

planets.forEach(planet => {
    section.appendChild(createPlanet(planet));
});
