"use strict"
import { button, e } from './board.js';
import puzzle1 from '../static/puzzle1.json' assert { type: 'json' };
import { puzzle } from './sudokuGenerator.js';


console.log(typeof puzzle);
console.log('----------------------------------------------');
console.log(puzzle1);

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
        generate(puzzle1)
    });

    const div = e('div', {}, hideBtn, input, confirmBtn);
}

