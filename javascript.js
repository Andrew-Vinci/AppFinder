
function createAppIcons(numberOfIcons) {
    const grid = document.querySelector('.container');
    counter = 0;
    for(let i = 0; i < numberOfIcons; i++){
        const appIcon = document.createElement('div');

        appIcon.textContent = "Item" + counter
        counter++

        grid.appendChild(appIcon);

    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    createAppIcons(35);
  });