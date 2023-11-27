var winningApp = 0
var startTime = 0
var endTime = 0
var numOfMissclicks = 0
var runThroughNum = 0
var times = []
var correctIcons = []
var wrongIcons = []
var allIcons = []

var buttonArray = []
var buttonArrayOG = []

let startTimezz = 0;
let timerInterval; // Global variable for the interval
let incorrectClicks = 0;
let colorCycle;
const showApp = document.querySelector('.showApp');

// Check if a value already exists in local storage
const storedValue = getColorCycle();
if (storedValue !== null) {
    colorCycle = storedValue; // Use the stored value
} else {
    colorCycle = 0; // Initialize to 0 if not already set
    setColorCycle(colorCycle); // Store the initial value
}

var imageUrlsWhite = ['images/Icon0_ChatGPT.png', 'images/Icon1_Youtube.png', 'images/Icon2_WhatsApp.png',
    'images/Icon3_Facebook.png', 'images/Icon4_CashApp.png', 'images/Icon5_Venmo.png',
    'images/Icon6_Snapchat.png', 'images/Icon7_Spotify.png', 'images/Icon8_Uber.png',
    'images/Icon9_.png', 'images/Icon10_Doordash.png', 'images/Icon11_Temu.png',
    'images/Icon12_Capcut.png', 'images/Icon13_Telegram.png', 'images/Icon14_Shein.png',
    'images/Icon15_McDonalds.png', 'images/Icon16_Threads.png', 'images/Icon17_Walmart.png',
    'images/Icon18_PrimeVideo.png', 'images/Icon19_Netflix.png', 'images/Icon20_Reddit.png',
    'images/Icon21_Life360.png', 'images/Icon22_Ticketmaster.png', 'images/Icon23_Pinterest.png',
    'images/Icon24_Roblox.png', 'images/Icon25_Shop.png', 'images/Icon26_Zoom.png',
    'images/Icon27_Discord.png', 'images/Icon28_HBOMax.png', 'images/Icon29_Tinder.png',
    'images/Icon30_Hulu.png', 'images/Icon31_Audible.png', 'images/Icon32_LinkedIn.png',
    'images/Icon33_Paramount.png', 'images/Icon34_0_Finder.png'
];

var imageUrlsRed = ['images/Icon0_ChatGPT.png', 'images/Icon1_Youtube.png', 'images/Icon2_WhatsApp.png',
    'images/Icon3_Facebook.png', 'images/Icon4_CashApp.png', 'images/Icon5_Venmo.png',
    'images/Icon6_Snapchat.png', 'images/Icon7_Spotify.png', 'images/Icon8_Uber.png',
    'images/Icon9_.png', 'images/Icon10_Doordash.png', 'images/Icon11_Temu.png',
    'images/Icon12_Capcut.png', 'images/Icon13_Telegram.png', 'images/Icon14_Shein.png',
    'images/Icon15_McDonalds.png', 'images/Icon16_Threads.png', 'images/Icon17_Walmart.png',
    'images/Icon18_PrimeVideo.png', 'images/Icon19_Netflix.png', 'images/Icon20_Reddit.png',
    'images/Icon21_Life360.png', 'images/Icon22_Ticketmaster.png', 'images/Icon23_Pinterest.png',
    'images/Icon24_Roblox.png', 'images/Icon25_Shop.png', 'images/Icon26_Zoom.png',
    'images/Icon27_Discord.png', 'images/Icon28_HBOMax.png', 'images/Icon29_Tinder.png',
    'images/Icon30_Hulu.png', 'images/Icon31_Audible.png', 'images/Icon32_LinkedIn.png',
    'images/Icon33_Paramount.png', 'images/Icon34_1_Finder.png'
];

var imageUrlsGreen = ['images/Icon0_ChatGPT.png', 'images/Icon1_Youtube.png', 'images/Icon2_WhatsApp.png',
    'images/Icon3_Facebook.png', 'images/Icon4_CashApp.png', 'images/Icon5_Venmo.png',
    'images/Icon6_Snapchat.png', 'images/Icon7_Spotify.png', 'images/Icon8_Uber.png',
    'images/Icon9_.png', 'images/Icon10_Doordash.png', 'images/Icon11_Temu.png',
    'images/Icon12_Capcut.png', 'images/Icon13_Telegram.png', 'images/Icon14_Shein.png',
    'images/Icon15_McDonalds.png', 'images/Icon16_Threads.png', 'images/Icon17_Walmart.png',
    'images/Icon18_PrimeVideo.png', 'images/Icon19_Netflix.png', 'images/Icon20_Reddit.png',
    'images/Icon21_Life360.png', 'images/Icon22_Ticketmaster.png', 'images/Icon23_Pinterest.png',
    'images/Icon24_Roblox.png', 'images/Icon25_Shop.png', 'images/Icon26_Zoom.png',
    'images/Icon27_Discord.png', 'images/Icon28_HBOMax.png', 'images/Icon29_Tinder.png',
    'images/Icon30_Hulu.png', 'images/Icon31_Audible.png', 'images/Icon32_LinkedIn.png',
    'images/Icon33_Paramount.png', 'images/Icon34_2_Finder.png'
];

var imageUrlsBlue = ['images/Icon0_ChatGPT.png', 'images/Icon1_Youtube.png', 'images/Icon2_WhatsApp.png',
    'images/Icon3_Facebook.png', 'images/Icon4_CashApp.png', 'images/Icon5_Venmo.png',
    'images/Icon6_Snapchat.png', 'images/Icon7_Spotify.png', 'images/Icon8_Uber.png',
    'images/Icon9_.png', 'images/Icon10_Doordash.png', 'images/Icon11_Temu.png',
    'images/Icon12_Capcut.png', 'images/Icon13_Telegram.png', 'images/Icon14_Shein.png',
    'images/Icon15_McDonalds.png', 'images/Icon16_Threads.png', 'images/Icon17_Walmart.png',
    'images/Icon18_PrimeVideo.png', 'images/Icon19_Netflix.png', 'images/Icon20_Reddit.png',
    'images/Icon21_Life360.png', 'images/Icon22_Ticketmaster.png', 'images/Icon23_Pinterest.png',
    'images/Icon24_Roblox.png', 'images/Icon25_Shop.png', 'images/Icon26_Zoom.png',
    'images/Icon27_Discord.png', 'images/Icon28_HBOMax.png', 'images/Icon29_Tinder.png',
    'images/Icon30_Hulu.png', 'images/Icon31_Audible.png', 'images/Icon32_LinkedIn.png',
    'images/Icon33_Paramount.png', 'images/Icon34_3_Finder.png'
];

function setColorCycle(value) {
    localStorage.setItem('colorCycle', value);
}

// This function retrieves the value of colorCycle from local storage
function getColorCycle() {
    let value = localStorage.getItem('colorCycle');
    return value !== null ? parseInt(value, 10) : null; // Converts the string back to an integer
}

function createAppIcons(numberOfIcons) {
    const grid = document.querySelector('.container')
    counter = 0;
    randomizeGrid(imageUrlsWhite);
    randomizeGrid(imageUrlsRed);
    randomizeGrid(imageUrlsGreen);
    randomizeGrid(imageUrlsBlue);

    for(let i = 0; i < numberOfIcons; i++){
        const appIcon = document.createElement('button');

        //appIcon.textContent = "Item" + counter
        appIcon.id = i; // I changed this to just be an number for simpler comparisons
        appIcon.textContent = i;
        appIcon.classList.add('item')
        counter++


        if(getColorCycle() == 0){
            if (imageUrlsWhite[i]) {
                appIcon.style.backgroundImage = `url(${imageUrlsWhite[i]})`;
            }
            if(imageUrlsWhite[i] == 'images/Icon34_0_Finder.png'){
                appIcon.id = 9000;
                appIcon.textContent = 9000;
            }
        }

        if(getColorCycle() == 1){
            if (imageUrlsRed[i]) {
                appIcon.style.backgroundImage = `url(${imageUrlsRed[i]})`;
            }
            if(imageUrlsRed[i] == 'images/Icon34_1_Finder.png'){
                appIcon.id = 9000;
                appIcon.textContent = 9000;
            }
        }

        if(getColorCycle() == 2){
            if (imageUrlsGreen[i]) {
                appIcon.style.backgroundImage = `url(${imageUrlsGreen[i]})`;
            }
            if(imageUrlsGreen[i] == 'images/Icon34_2_Finder.png'){
                appIcon.id = 9000;
                appIcon.textContent = 9000;
            }
        }

        if(getColorCycle() == 3){
            if (imageUrlsBlue[i]) {
                appIcon.style.backgroundImage = `url(${imageUrlsBlue[i]})`;
            }
            if(imageUrlsBlue[i] == 'images/Icon34_3_Finder.png'){
                appIcon.id = 9000;
                appIcon.textContent = 9000;
            }
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


function clearGrid() {
    const grid = document.querySelector('.container');
    grid.innerHTML = '';
}

function downloadTextFile(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}



function clickAndShuffle() {
    // For each button inside the array
    buttonArray.forEach(button => {

        // Get the click listener
        button.addEventListener('click', function () {

            if(button.id == 9000){
                stopTimer();
                let totalTime = Math.floor((Date.now() - startTimezz) / 1000);
                console.log('Timer stopped. Total elapsed time:', totalTime, 'seconds');

                //setColorCycle(colorCycle);

                console.log("WINNER");
                console.log("Incorrect Clicks: " + incorrectClicks);

                // Could add enum here but Javascript doenst have native enum
                if(getColorCycle() == 0){
                    console.log("Color: White");
                    downloadTextFile("White " + "Incorrect Clicks: " + incorrectClicks + 
                    " Time Elapsed: " + totalTime + "s", 'results.txt');
                }
                if(getColorCycle() == 1){
                    console.log("Color: Red");
                    downloadTextFile("Red " + "Incorrect Clicks: " + incorrectClicks + 
                    " Time Elapsed: " + totalTime + "s", 'results.txt');
                }
                if(getColorCycle() == 2){
                    console.log("Color: Green");
                    downloadTextFile("Green " + "Incorrect Clicks: " + incorrectClicks + 
                    " Time Elapsed: " + totalTime + "s", 'results.txt');
                }
                if(getColorCycle() == 3){
                    console.log("Color: Blue");
                    downloadTextFile("Blue " + "Incorrect Clicks: " + incorrectClicks + 
                    " Time Elapsed: " + totalTime + "s", 'results.txt');
                }
                
                incorrectClicks = 0;
                colorCycle++;
                setColorCycle(colorCycle);
                if(getColorCycle() > 3){
                    console.log("Experiement Complete.");
                    colorCycle = 0;
                    setColorCycle(colorCycle);
                }
                else{
                    startTimer();
                }

                window.location.href = "index.html";
                // stop timer
                // record info
            }
            else{
                incorrectClicks++;
            }

            // check if app is winning app
            //checkClickedApp(this.id);

            // Shuffle the buttonArray w/ all buttons
            randomizeGrid(buttonArray);

            // Clear the existing grid being displayed to user
            clearGrid();

            // Re-append/insert the buttons into the container html
            buttonArray.forEach((shuffledButton, newIndex) => {
                if(getColorCycle() == 0){
                    if(shuffledButton.id == 9000){
                        shuffledButton.style.backgroundImage = `url(images/Icon34_0_Finder.png)`;
                    }
                }
                if(getColorCycle() == 1){
                    if(shuffledButton.id == 9000){
                        shuffledButton.style.backgroundImage = `url(images/Icon34_1_Finder.png)`;
                    }
                }
                if(getColorCycle() == 2){
                    if(shuffledButton.id == 9000){
                        shuffledButton.style.backgroundImage = `url(images/Icon34_2_Finder.png)`;
                    }
                }
                if(getColorCycle() == 3){
                    if(shuffledButton.id == 9000){
                        shuffledButton.style.backgroundImage = `url(images/Icon34_3_Finder.png)`;
                    }
                }
                document.querySelector('.container').appendChild(shuffledButton);
            });

            // Console log the button ID
            console.log('Button ID:', this.id);
        });
    });
}


function startTimer() {
    startTimezz = Date.now();

    // Clear any existing interval to avoid multiple timers running
    clearInterval(timerInterval);

    // Set up a new interval timer
    timerInterval = setInterval(function() {
        let elapsedTime = Math.floor((Date.now() - startTimezz) / 1000); // Elapsed time in seconds
        console.log('Elapsed Time:', elapsedTime, 'seconds');
    }, 1000); // Update every 1000 milliseconds (1 second)
}

function stopTimer() {
    clearInterval(timerInterval); // Stop the interval timer

    // Optional: Log the total elapsed time when the timer stops
    let totalTime = Math.floor((Date.now() - startTimezz) / 1000);
    console.log('Timer stopped. Total elapsed time:', totalTime, 'seconds');
}

function displayColor() {
    cycle = getColorCycle()
    console.log(cycle)
    if (cycle == 0) {
        document.getElementById("demo").style.backgroundImage = `url(images/Icon34_0_Finder.png)`;
    }
    if (cycle == 1) {
        document.getElementById("demo").style.backgroundImage = `url(images/Icon34_1_Finder.png)`;
    }
    if (cycle == 2) {
        document.getElementById("demo").style.backgroundImage = `url(images/Icon34_2_Finder.png)`;
    }
    if (cycle == 3) {
        document.getElementById("demo").style.backgroundImage = `url(images/Icon34_3_Finder.png)`;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    createAppIcons(35);
    startTimer();
    //console.log(startTimezz);
    //winningApp = chooseWinningApp();
    //console.log("Winning app:", winningApp);
    //startTime = Date.now()
    clickAndShuffle();
});













/*

// add a new html page to make user download file afterwards
function saveToSheet() {
    allData = times.toString() + "\n" + correctIcons.toString() + "\n" + wrongIcons.toString() + "\n \n";
    const link = document.createElement("downloadLink");
    //const content = document.querySelector("textarea").value;
    const file = new Blob([allData], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "data.txt";
    link.click();
    URL.revokeObjectURL(link.href);
}

// randomly determines which app wins in this current pass
// should we have a list of past winning apps so it's a different app every time?
function chooseWinningApp() {
    return Math.floor(Math.random() * 35);
}

// sees if the user clicked the app
function checkClickedApp(icon) {
    //icon = getElementByClassName("item")
    console.log(icon)

    // do something to convert icon into a number
    if (icon == winningApp) {
        endTime = Date.now() - startTime;
        console.log('time:', endTime);
        times.push(endTime)
        correctIcons.push(winningApp)
        console.log('You are correct, icon you picked is', icon);
        winningApp = chooseWinningApp()
        console.log('New winning number is ', winningApp);
        saveToSheet()
        return endTime
    }
    else {
        console.log('You are wrong, icon you picked is', icon);
        correctIcons.push(icon)
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
        console.log("Winning app:", winningApp)
        startTime = Date.now()
        numOfMissclicks = 0
    }
    else {
        // add data to spreadsheet
    }
}


*/

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