//import { p1 } from './puzzles.js'; p1 is used only for testing purposes
import { generateBoard, button, e } from './board.js'
import { init } from './import.js';
import { createTimer } from './timer.js';
//import  generateBlankBoard  from './generateNewSudoku.js';

import  puzzle from './sudokuGenerator.js';
console.log(puzzle)
//import startingBoard from './fillboard.js';

// Load puzzle
// Generate DOM elements
// Check solution
// Configure input event listeners

window.addEventListener('DOMContentLoaded', start);

function start(){
    const panel = document.getElementById('panel');

    const main = document.querySelector('main');
    let cells = {
        blocks: [[]],
        rows: [[]],
        columns: [[]],
    };

    // check(cells[0]);
    init((puzzle => {
        cells = generateBoard(puzzle, main);
        //createTimer();
    }));
    const timer = createTimer();

   //let blankBoard = generateBlankBoard();
   //console.log(blankBoard);
   
    const checkBtn = document.getElementById('checkBtn'); 
    checkBtn.addEventListener('click', () => {
        cells.blocks.forEach(b => check(b));
        const blocksReady = cells.blocks.every(check);   

        cells.rows.forEach(r => check(r)); 
        const rowsReady = cells.rows.every(check);

        cells.columns.forEach(c => check(c));
        const columnsReady = cells.columns.every(check);
        
        if(blocksReady && rowsReady  && columnsReady ){
            const img = e('img', { attr: 'src' }, '')
            img.src = 'src/win.jpg';
            main.appendChild(img);  
            timer.pause();    
        }
        checkBtn.replaceWith(uncheckedButton);
    })

    const uncheckedButton = button('Clear check', () => {
        cells.blocks.forEach(c => c.forEach(x=> x.classList.remove('error')));
        uncheckedButton.replaceWith(checkBtn);
    })

    const pauseBtn = document.getElementById('pauseBtn'); 
     
    pauseBtn.addEventListener('click', () => {
        main.remove();
        timer.pause();
        pauseBtn.replaceWith(resumeBtn);
    });
    
    const resumeBtn = button('Resume', () => {
        resumeBtn.addEventListener('click', () => {
        panel.before(main);    
        timer.resume();
        resumeBtn.replaceWith(pauseBtn);
        });
    });  
}

export function check(cells){
    const numbers = new Set();
    console.log(cells)
    for(let cell of cells){
        console.log(cell.value)
        if(cell.value != ''){    
            numbers.add(cell.value);
        }
    }

    if(numbers.size == 9){
        return true;
        
    }else{
        cells.forEach(c => c.classList.add('error'));
        return false;
    }
}
