let ball = document.getElementById('ball') ;

const up =()=>{
    ball.style.bottom = '300px'
}
const down = ()=>{
    ball.style.bottom = '10px'
}
document.onkeydown = up;
document.onkeyup = down;