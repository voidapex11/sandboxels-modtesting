elements.upRocket = {
    color: ["#782828","#783b28","#784b28"],
    behavior: [
        "XX|M1 AND EX:8|XX",
        "XX|CC:782828,783b28,784b28%25|XX",
        "M2|CR:fire%25|M2",
    ],
    reactions: {
        "water": { elem1:"rock", elem2:"steam" }
    },
    category: "weapons",
    temp:600,
    tempLow: -100,
    stateLow: "rock",
    burning: true,
    burnInto: ["rock","rock","steam"],
    burnTime: 170,
    burn: 100,
    state: "solid",
    density: 1600,
    excludeRandom: true,
    cooldown: defaultCooldown
}
