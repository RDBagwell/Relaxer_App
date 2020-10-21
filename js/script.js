const containerEl = document.getElementById('container');
const textEl = document.getElementById('text');

const totalTime = 7500;
const breatheThime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
    textEl.textContent = 'Breathe In';
    containerEl.className = ('container grow');
    setTimeout(()=>{
        textEl.textContent = 'Hold';
        
        setTimeout(()=>{
            
            textEl.textContent = 'Breathe Out';
            containerEl.className = ('container shrink');
        }, holdTime);
    }, breatheThime);
}

setInterval(breathAnimation, totalTime);

breathAnimation();