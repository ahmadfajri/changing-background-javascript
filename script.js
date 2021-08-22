let container = document.getElementById('container');
let buttonChange = document.getElementById('btn-change');

// HexCode
function randomColor() {
    let hexCode = '#';
    let hexTreasure = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        hexCode += hexTreasure[Math.floor(Math.random() * 16)]
    }
    return hexCode;
}

buttonChange.onclick = () => {
    container.style.backgroundColor = randomColor()
}