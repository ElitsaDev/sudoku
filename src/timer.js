export function createTimer(){
    const output = document.getElementById('timer');
    let lastTime = performance.now();
    let elapsed = 0; //keep track of how much time has passed

    tick(lastTime);

    function pause(){

    }

    function resume(){
        
    }

    function tick(time){
        const delta = time - lastTime;
        elapsed += delta;
        lastTime = time;

        const total = elapsed / 1000;//counts in seconds according to the Hz of the monitor
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