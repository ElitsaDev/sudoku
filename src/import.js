"use strict"
import puzzle from './sudokuGenerator.js';
//import { button, e } from './board.js';
//import puzzle1 from '../static/puzzle1.json' assert { type: 'json' };

export function init(generate){
    const showBtn = document.getElementById('loadBtn');
    
    
    showBtn.addEventListener('click', () => {
        
        if(showBtn.hasAttribute('clicked')){
            location.reload();
            showBtn.removeAttribute('clicked');
        }else{
            generate(puzzle); 
            showBtn.setAttribute('clicked', false);   
        }    
    });
}

/*
export function init(generate){
    const input = e('textarea', {});
    const showBtn = document.getElementById('loadBtn');
    showBtn.addEventListener('click', () => {
        showBtn.replaceWith(div);
    });

    const hideBtn = button('Cancel', () => {
        div.replaceWith(showBtn);
    });

    const confirmBtn = button('Load', () => {
        generate(puzzle)
    });

    const div = e('div', {}, hideBtn, input, confirmBtn);  
} */
 