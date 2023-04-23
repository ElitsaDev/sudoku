import { button, e } from './board.js';

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
        const puzzle = JSON.parse(input.value);
        generate(puzzle)
    });

    const div = e('div', {}, hideBtn, input, confirmBtn);
}

