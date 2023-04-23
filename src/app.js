import { p1 } from './puzzles.js';
import { generateBoard, button } from './board.js'
import { init } from './import.js';
import { createTimer } from './timer.js';
// Load puzzle
// Generate DOM elements
// Check solution
// Configure input event listeners

window.addEventListener('DOMContentLoaded', start);

function start(){
    const main = document.querySelector('main');
    let cells = {
        blocks: [[]],
        rows: [[]],
        columns: [[]],
    };
   //const cells = generateBoard(new Array(3).fill(new Array(3).fill(new Array(9).fill(0))), main) //prazno sudoku

    const checkBtn = document.getElementById('checkBtn'); 
    checkBtn.addEventListener('click', () => {
        cells.blocks.forEach(check);
        checkBtn.replaceWith(uncheckedButton);
    })

    const uncheckedButton = button('Clear check', () => {
        cells.blocks.forEach(c => c.forEach(x=> x.classList.remove('error')));
        uncheckedButton.replaceWith(checkBtn);
    })

   // check(cells[0]);
   init((puzzle => {
        cells = generateBoard(puzzle, main);
        createTimer();
   }));
}

function check(cells){
    const numbers = new Set();
    
    for(let cell of cells){
        console.log(cell.value)
        if(cell.value != ''){
            
            numbers.add(cell.value);
        }
    }

    if(numbers.size != 9){
        cells.forEach(c => c.classList.add('error'));
    }
}




// function start() {
//     const panel = document.getElementById('panel');
//     const main = document.querySelector('main');
//     const cells = generateBoard(p1, main);
   
// }
