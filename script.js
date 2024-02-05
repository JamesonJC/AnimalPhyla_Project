document.addEventListener("DOMContentLoaded", function () {
    const animalList = document.getElementById("animalList");

    // Example animal data (replace this with data from your MySQL database)
    const animals = [
        {
            name: "Lion",
            description: "The lion is a species in the family Felidae and a member of the genus Panthera.",
            image: "lion.jpg",
            video: "lion.mp4",
            link: "https://en.wikipedia.org/wiki/Lion",
        },
        // Add more animals as needed
    ];

    animals.forEach((animal) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
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