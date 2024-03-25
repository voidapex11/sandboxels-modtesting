elements.info = {
    category: "land",
};

elements.mayyyyo = {
    color: "#ffffff",
    behavior: behaviors.LIQUID,
    category: "land",
    viscosity: 100000,
    state: "liquid",
    density: 720,
};

elements.sand_exploder = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            pixel.element = "explosion"
        }
    },
    category: "tools",
};


behaviors.info.tick = function(pixel) {
    alert('hi')
};
