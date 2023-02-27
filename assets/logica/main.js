const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump=()=>{
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    },500)
}

const loop= setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace("px", "");
    
    if(pipePosition<= 68 && pipePosition > 0 && marioPosition < 80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src='./assets/imagens/game-over.webp';
        mario.style.width = '60px';

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;

        clearInterval(loop);
    }
},10)

document.addEventListener('keydown', jump)