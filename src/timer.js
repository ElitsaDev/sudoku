export function createTimer(){
    const output = document.getElementById('timer');
    let lastTime = performance.now();
    let elapsed = 0; //pazi kolko vreme e minalo

    tick(lastTime);

    function pause(){

    }

    function resume(){
        
    }

    function tick(time){
        const delta = time - lastTime;
        elapsed += delta;
        lastTime = time;

        const total = elapsed / 1000;//broi v sekundi saobrazeno s Hz na monitora
        const seconds = total % 60;
        const minutes = (total / 60) % 60;
        const hours = total / 3600; 

        output.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;  
        requestAnimationFrame(tick);
    }
}

function formatTime(value){
    return ('0' + Math.floor(value)).slice(-2);
}