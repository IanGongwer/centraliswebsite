let counter = 0;

fetch("https://centralisrestapi.herokuapp.com/players")
    .then((response) => response.json())
    .then((data) => data.forEach(function (item, index) {
        if (counter < 10) {
            addItemToDOM(item)
            counter++;
        }
    }));

function addItemToDOM(item, index) {
    // ✅ Create element
    const table = document.getElementById("statscontainer")

    let row = table.insertRow(index);

    const icon = row.insertCell(0);
    const user = row.insertCell(1);
    const wins = row.insertCell(2);
    const kills = row.insertCell(3);
    const deaths = row.insertCell(4);

    const image = document.createElement("img");
    image.src = "https://minotar.net/avatar/" + item.player_name + "/35";

    icon.appendChild(image);
    user.textContent = item.player_name;
    wins.textContent = item.game_wins;
    kills.textContent = item.player_kills;
    deaths.textContent = item.player_deaths;
}