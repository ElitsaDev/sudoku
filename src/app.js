import { p1 } from './puzzles.js';
import { generateBoard, button, e } from './board.js'
import { init } from './import.js';
import { createTimer } from './timer.js';
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
   //const cells = generateBoard(new Array(3).fill(new Array(3).fill(new Array(9).fill(0))), main) //prazno sudoku

    const checkBtn = document.getElementById('checkBtn'); 
    checkBtn.addEventListener('click', () => {
        const blocksReady = cells.blocks.every(check);
        const rowsReady = cells.rows.every(check);
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

    const timer = createTimer();

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

    if(numbers.size == 9){
        return true;
        
    }else{
        cells.forEach(c => c.classList.add('error'));
        return false;
    }
}




// function start() {
//     const panel = document.getElementById('panel');
//     const main = document.querySelector('main');
//     const cells = generateBoard(p1, main);
   
// }
