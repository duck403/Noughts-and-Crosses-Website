
let turn = 0;
grid = ["1","2","3","4","5","6","8","9"];

function toggleButtonText(buttonNumber) {
    var button = document.querySelector('button:nth-child(' + buttonNumber + ')');
    
    if (turn == 0) {
        if (button.innerHTML.trim() === "") {
            button.innerHTML = "X";
            grid[buttonNumber-1] = "X"
            array.textContent = grid
        }

        turn = 1;
    }

    else {
        if (button.innerHTML.trim() === "") {
            button.innerHTML = "O";
            grid[buttonNumber-1] = "O"
            array.textContent = grid
        } 
        turn = 0;
    }
    
}

function reset() {
    for (let i = 0; i < grid.length; i++) {
        grid[i] = (i + 1).toString();
        let button = document.querySelector('button:nth-child(' + (i + 1) + ')');
        button.innerHTML = "";
    }
    array.textContent = grid;
    turn = 0; // Reset the turn to X
}

    let array = document.getElementById('array_display')

    
    
