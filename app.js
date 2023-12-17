document.getElementById('btn1').addEventListener('click', function() {
  document.querySelector('#projects').scrollIntoView({ 
      behavior: 'smooth' 
  });
});

document.getElementById('btn2').addEventListener('click', function() {
  document.querySelector('#contact').scrollIntoView({ 
      behavior: 'smooth' 
  });
});