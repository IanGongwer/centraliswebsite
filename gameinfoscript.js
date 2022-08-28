function runGameInformation() {
    fetch("https://centralisrestapi.herokuapp.com/gameinformation")
        .then((response) => response.json())
        .then((data) => data.forEach(function (item) {
            addItemToDOM(item)
        }));
}

function addItemToDOM(item) {
    const playersLeft = document.getElementById("playersLeft");
    playersLeft.textContent = item.players_left;

    const borderSize = document.getElementById("borderSize");
    borderSize.textContent = item.border_size;

    const gameTime = document.getElementById("gameTime");
    gameTime.textContent = getGameTimeFormatted(item.game_time);
}

function getGameTimeFormatted(gameTime) {
    second = gameTime % 60;
    minute = gameTime / 60;
    if (minute >= 60) {
        hour = minute / 60;
        minute %= 60;
        return Math.floor(hour).toFixed(0) + ":" + Math.floor(minute).toFixed(0) < 10 ? "0" + Math.floor(minute).toFixed(0) : Math.floor(minute).toFixed(0) + ":" + (Math.floor(second).toFixed(0) < 10 ? "0" + Math.floor(second).toFixed(0) : Math.floor(second).toFixed(0));
    }
    return Math.floor(minute).toFixed(0) + ":" + (Math.floor(second).toFixed(0) < 10 ? "0" + Math.floor(second).toFixed(0) : Math.floor(second).toFixed(0));
}

var t = setInterval(runGameInformation, 1000);