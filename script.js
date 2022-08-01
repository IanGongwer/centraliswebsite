let counter = 0;

fetch("https://restapijs.herokuapp.com/apiData")
    .then((response) => response.json())
    .then((data) => data.forEach(function (item) {
        if (counter < 10) {
            addItemToDOM(item)
            counter++;
        }
    }));

function addItemToDOM(item) {
    // ✅ Create element
    const container = document.createElement('div');
    const el = document.createElement('div');
    const image = document.createElement('img')

    image.src = "https://minotar.net/avatar/" + item.name + "/50";

    el.textContent = item.name + " | Wins: " + item.wins + " | Kills: " + item.kills + " | Deaths: " + item.deaths;

    container.setAttribute('id', 'playercontainer')
    el.setAttribute('id', "playerstat");
    image.setAttribute('id', 'playerimage')

    const box = document.getElementById('statscontainer');
    container.appendChild(image);
    container.appendChild(el);
    box.appendChild(container);
}