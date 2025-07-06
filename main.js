let ball = document.getElementById('ball') ;

const up =()=>{
    ball.style.bottom = '300px'
}
const down = ()=>{
    ball.style.bottom = '10px'
}
document.onkeydown = up;
document.onkeyup = down;
// the code below prevents the projects from being seen till the nav-project is clicked.
let projects = document.getElementById('project');
let navProject = document.getElementById('navProject');
let closeButton = document.getElementById('closeProjects')
projects.hidden = true;
const showProjects =()=>{
    projects.hidden = false;
}
navProject.onclick = showProjects;

const closeProjects =()=>{
    projects.hidden = true;
}
closeButton.onclick = closeProjects;
