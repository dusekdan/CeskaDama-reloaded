
const renderGameField = () => {
    let xCount = 8;
    let yCount = 8;
    
    // 8x8 rendered as a table
    let table = document.createElement("table");
    table.setAttribute("class", "chessboard");

    for (let x = 0; x < xCount; x++) {
        let tr = document.createElement("tr");
        tr.setAttribute("class", "chessboard");
        for (let y = 0; y < yCount; y++) {
            let offset = x == 0 ? 0 : x*xCount;
            let td = document.createElement("td");
            td.setAttribute("class", "chessboard");
            td.setAttribute("id", (offset+y));

            // Attach a listener
            td.addEventListener("click", () => { handleClickOn(offset+y); });

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

const placeStoneOn = (id, type) => {
    let element = document.getElementById(id);
    if (element) {
        // TODO: Maybe check game rules here
        // TODO: Implement stone placement
        let figure = document.createElement("div");
        figure.setAttribute("class", type);
        element.appendChild(figure);
    } else { throw "Trying to place a stone on invalid ID."; }
}

const removeStoneOn = id => {
    document.getElementById(id).innerHTML = "";
}

const removeAllStones = () => {
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            let offset = x == 0 ? 0 : x*8;
            document.getElementById(offset+y).innerHTML = "";
        }
    }
}

const handleClickOn = id => {
    console.log(`Click on ${id}`);
}

let positions = [];

let examplePosition = {
    "id": 22,
    "color": "white"
}