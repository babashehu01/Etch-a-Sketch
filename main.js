// Get grid size
let container = document.querySelector('.container');
let size = 16;
input = document.querySelector('#grid-num');
drawGrid();
input.addEventListener('change', () => drawGrid());

// Draw grid function
function drawGrid () {
    container.innerHTML = '';
    size = input.value;
    for (let i =  0; i < size; i ++) {
         let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < size; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            column.setAttribute('hover', '0');
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    colorGrid();
}

// Color the grid based on events
function colorGrid() {
    let column = document.querySelectorAll('.column')
    column.forEach(col => {
        col.addEventListener("mouseenter", () => {
            let hoverCount = col.getAttribute('hover');
            hoverCount++;
            if (hoverCount <= 10) {
                col.setAttribute('hover', hoverCount);
                col.setAttribute('style', `background-color: rgb(0, 0, 0, ${hoverCount/10})`);
            }
        });
    });
} 

// Reset
let reset = document.querySelector('button');
reset.addEventListener('click', () => {
    drawGrid();
});