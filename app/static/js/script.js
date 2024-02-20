document.addEventListener("DOMContentLoaded", function () {
    const animalList = document.getElementById("animalList");

    const animals = [
        {
            habitat: "African Savanna",
            habitatDescription: "The African Savanna is home to a variety of animals such as lions, elephants, and zebras.",
            name: "LION",
            description: "The lion is a species in the family Felidae and a member of the genus Panthera.",
            image: "lion.jpg",
            youtubeLinks: ["YOUR_LION_VIDEO_ID_1", "YOUR_LION_VIDEO_ID_2","YOUR_LION_VIDEO_ID_3", "YOUR_LION_VIDEO_ID_4"],
            link: "https://en.wikipedia.org/wiki/Lion",
        },
        {
            habitat: "Amazon Rainforest",
            habitatDescription: "The Amazon Rainforest, the world's largest tropical rainforest, houses numerous species including jaguars, sloths, and macaws.",
            name: "JAGUAR",
            description: "The jaguar is a large feline species native to the Americas.",
            image: "jaguar.jpg",
            youtubeLinks: ["YOUR_JAGUAR_VIDEO_ID_1", "YOUR_JAGUAR_VIDEO_ID_2", "YOUR_JAGUAR_VIDEO_ID_3", "YOUR_JAGUAR_VIDEO_ID_4"],
            link: "https://en.wikipedia.org/wiki/Jaguar",
        },
        {
            habitat: "Arctic Tundra",
            habitatDescription: "The Arctic Tundra, while harsh and cold, is the habitat for animals like polar bears, arctic foxes, and reindeer.;",
            name: "POLAR BEAR",
            description: "The polar bear is a hypercarnivorous bear whose native range lies largely within the Arctic Circle.",
            image: "polar_bear.jpg",
            youtubeLinks: ["YOUR_POLAR_BEAR_VIDEO_ID_1", "YOUR_POLAR_BEAR_VIDEO_ID_2", "YOUR_POLAR_BEAR_VIDEO_ID_3", "YOUR_POLAR_BEAR_VIDEO_ID_4"],
            link: "https://en.wikipedia.org/wiki/Polar_bear",
        },
    ];

    animals.forEach((animal) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h1>${animal.habitat}</h1>
            <p>${animal.habitatDescription}</p>
            <h2>${animal.name}</h2>
            <p>${animal.description}</p>
            <div class="video-container">
                <div class="horizontal-scroll">
                    ${animal.youtubeLinks.map((videoId) => `
                        <iframe class="scroll-video" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    `).join('')}
                    <span class="scroll-icon">➤</span>
                </div>
            </div>
            <p><a href="${animal.link}" target="_blank">Learn more about ${animal.name}</a></p>
        `;
        animalList.appendChild(listItem);
    });

    // hamburger menu script<span class="scroll-icon">➤</span>
    // Get the hamburger menu element
    const hamburger = document.querySelector('.hamburger-menu');

    // Get the nav menu element
    const navMenu = document.querySelector('.nav-menu');

    // Add an event listener to the hamburger menu element
    hamburger.addEventListener('click', () => {
        // Toggle the 'show' class to the nav menu element
        navMenu.classList.toggle('show');
    });
});
