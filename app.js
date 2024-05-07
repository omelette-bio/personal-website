let btn_back = document.getElementById('back-btn');

let links_div = document.getElementById('links').innerHTML;
document.getElementById('links').innerHTML = '';

let prog_div = document.getElementById('p-skills').innerHTML;
document.getElementById('p-skills').innerHTML = '';

let cont_div = document.getElementById('contact').innerHTML;
document.getElementById('contact').innerHTML = '';


let proj1_div = document.getElementById('proj1').innerHTML;
document.getElementById('proj1').innerHTML = '';

let proj2_div = document.getElementById('proj2').innerHTML;
document.getElementById('proj2').innerHTML = '';

let proj3_div = document.getElementById('proj3').innerHTML;
document.getElementById('proj3').innerHTML = '';

let proj4_div = document.getElementById('proj4').innerHTML;
document.getElementById('proj4').innerHTML = '';


document.getElementById('content').innerHTML = links_div;


function goToProgSkills() {
  document.getElementById('content').innerHTML = prog_div;
}

function goToContactPage() {
  document.getElementById('content').innerHTML = cont_div;
}

function backToMenu() {
  document.getElementById('content').innerHTML = links_div;
}

function goToProject1() {
  document.getElementById('content').innerHTML = proj1_div;
}

function goToProject2() {
  document.getElementById('content').innerHTML = proj2_div;
}

function goToProject3() {
  document.getElementById('content').innerHTML = proj3_div;
}

function goToProject4() {
  document.getElementById('content').innerHTML = proj4_div;
}