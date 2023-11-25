var winningApp = 0
var startTime = 0
var endTime = 0
var numOfMissclicks = 0

var buttonArray = []

function createAppIcons(numberOfIcons) {
    const grid = document.querySelector('.container')
    counter = 0;
    for(let i = 0; i < numberOfIcons; i++){
        const appIcon = document.createElement('button');

        appIcon.textContent = "Item" + counter
        appIcon.classList.add('item' + counter)
        counter++

        buttonArray.push(appIcon);
        grid.appendChild(appIcon);

    }
}

function createGrid() {
    return [
        [0, 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34]
    ]
}

// randomizes app positions
// based on https://stackoverflow.com/questions/52241641/shuffling-multidimensional-array-in-js
function randomizeGrid(grid) {
    for (var k = 0; k < grid.length; k++) {
        var i = grid[k].length
        if (i == 0)
            return false
        else {
            while (--i) {
                var j = Math.floor(Math.random() * (i + 1))
                var tempi = grid[k][i]
                var tempj = grid[k][j]
                grid[k][i] = tempj
                grid[k][j] = tempi
            }
        }
    }
    return grid
}

// randomly determines which app wins in this current pass
// should we have a list of past winning apps so it's a different app every time?
function chooseWinningApp() {
    return Math.floor(Math.random() * 35);
}

// sees if the user clicked the app
function checkClickedApp(icon) {
    if (icon == winningApp) {
        endTime = Date.now() - startTime;
        times.push(endTime)
        correctIcons.push(winningApp)
        return endTime
    }
    else {
        numOfMissclicks++
    }
}


function gameLoop(grid, winningApp) {

}

function startGame() {
    if (runThroughNum > 2) {
        runThroughNum++
        grid = randomizeGrid(createGrid())
        winningApp = chooseWinningApp()
        startTime = Date.now()
        numOfMissclicks = 0
    }
    else {
        // add data to spreadsheet
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    createAppIcons(35);
});