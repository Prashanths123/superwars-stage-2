const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Create players using map function
    detailedPlayers = players.map((player, index) => ({
        name: player,
        strength: index + 5,
        image: `./images/super-${index + 1}.png`,
        type: index % 2 === 0 ? "hero" : "villain",
        id: index + 1
    }));

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100)
}

const buildPlayers = (players, type) => {
    const fragment = players
        .filter(player => player.type === type)
        .map(player => `
            <div class="player">
                <img src="${player.image}" alt="">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>
        `)
        .join('');

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
