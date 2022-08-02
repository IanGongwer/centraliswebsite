let counter = 0;

fetch("https://centralisrestapi.herokuapp.com/players")
    .then((response) => response.json())
    .then((data) => data.forEach(function (item, index) {
        if (counter < 10) {
            addItemToDOM(item, index)
            counter++;
        }
    }));

function addItemToDOM(item, index) {
    // ✅ Create element
    const table = document.getElementById("statscontainer")

    let row = table.insertRow();

    const rank = row.insertCell(0);
    const icon = row.insertCell(1);
    const user = row.insertCell(2);
    const wins = row.insertCell(3);
    const kills = row.insertCell(4);
    const deaths = row.insertCell(5);

    const image = document.createElement("img");
    image.src = "https://minotar.net/avatar/" + item.player_name + "/35";

    icon.appendChild(image);
    rank.textContent = index + 1;
    user.textContent = item.player_name;
    wins.textContent = item.game_wins;
    kills.textContent = item.player_kills;
    deaths.textContent = item.player_deaths;
}