var winningApp = 0
var startTime = 0
var endTime = 0
var numOfMissclicks = 0

var buttonArray = []
var buttonArrayOG = []

var imageUrls = ['images/appStoreIcon.png'];

function createAppIcons(numberOfIcons) {
    const grid = document.querySelector('.container')
    counter = 0;
    for(let i = 0; i < numberOfIcons; i++){
        const appIcon = document.createElement('button');

        appIcon.textContent = "Item" + counter
        appIcon.id = 'button-' + i;
        appIcon.classList.add('item')
        counter++

        if (imageUrls[i]) {
            appIcon.style.backgroundImage = `url(${imageUrls[i]})`;
        }

        buttonArray.push(appIcon);
        buttonArrayOG.push(appIcon);
        grid.appendChild(appIcon);

    }
}

// Rewrote randomiz grid to work with a single dimensional array
function randomizeGrid(grid) {
    for (let i = grid.length - 1; i > 0; i--) {
        // Random index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements with current index and random index
        [grid[i], grid[j]] = [grid[j], grid[i]];
    }
    return grid;
}

/*
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
*/

function clearGrid() {
    const grid = document.querySelector('.container');
    grid.innerHTML = '';
}

function clickAndShuffle() {
    // For each button inside the array
    buttonArray.forEach(button => {

        // Get the click listener
        button.addEventListener('click', function() {

            // Shuffle the buttonArray w/ all buttons
            randomizeGrid(buttonArray);

            // Clear the existing grid being displayed to user
            clearGrid();

            // Re-append/insert the buttons into the container html
            buttonArray.forEach(shuffledButton => {
                document.querySelector('.container').appendChild(shuffledButton);
            });

            // Console log the button ID
            console.log('Button ID:', this.id);
        });
    });
}


/*
function createGrid() {
    return [
        [0, 1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
        [14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27],
        [28, 29, 30, 31, 32, 33, 34]
    ]
}
*/


// randomly determines which app wins in this current pass
// should we have a list of past winning apps so it's a different app every time?
function chooseWinningApp() {
    return Math.floor(Math.random() * 35);
}

// sees if the user clicked the app
function checkClickedApp() {
    icon = getElementByClassName("item")
    console.log(icon)
    // do something to convert icon into a number
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
    clickAndShuffle();
});