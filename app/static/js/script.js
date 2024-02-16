document.addEventListener("DOMContentLoaded", function () {
    const animalList = document.getElementById("animalList");
    
    const animals = [
        {
            habitat: "African Savanna",
            habitatDescription: "The African Savanna is home to a variety of animals such as lions, elephants, and zebras.",
            name: "LION",
            description: "The lion is a species in the family Felidae and a member of the genus Panthera.",
            image: "lion.jpg",
            video: "lion.mp4",
            link: "https://en.wikipedia.org/wiki/Lion",
        },

        {
            habitat: "Amazon Rainforest",
            habitatDescription: "The Amazon Rainforest, the world's largest tropical rainforest, houses numerous species including jaguars, sloths, and macaws.",
            name: "LION",
            description: "The lion is a species in the family Felidae and a member of the genus Panthera.",
            image: "lion.jpg",
            video: "lion.mp4",
            link: "https://en.wikipedia.org/wiki/Lion",
        },

        {
            habitat: "Arctic Tundra",
            habitatDescription: "The Arctic Tundra, while harsh and cold, is the habitat for animals like polar bears, arctic foxes, and reindeer.;",
            name: "LION",
            description: "The lion is a species in the family Felidae and a member of the genus Panthera.",
            image: "lion.jpg",
            video: "lion.mp4",
            link: "https://en.wikipedia.org/wiki/Lion",
        },
        
    ];

    animals.forEach((animal) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h1>${animal.habitat}</h1>
                <p>${animal.habitatDescription}</p>
            <h2>${animal.name}</h2>
                <p>${animal.description}</p>
            <img src="static/images/${animal.image}" alt="${animal.name} Image" width="300">
            <video width="300" height="200" controls>
                <source src="static/videos/${animal.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p><a href="${animal.link}" target="_blank">Learn more about ${animal.name}</a></p>
        `;
        animalList.appendChild(listItem);
    });
});

// hamburger menu script
// Get the hamburger menu element
const hamburger = document.querySelector('.hamburger-menu');

// Get the nav menu element
const navMenu = document.querySelector('.nav-menu');

// Add an event listener to the hamburger menu element
hamburger.addEventListener('click', () => {
  // Toggle the 'show' class to the nav menu element
  navMenu.classList.toggle('show');
});