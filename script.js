//side menu js
const menuController = document.getElementById('menu-trigger');
menuController.addEventListener('click', function() {
  document.querySelector('.side-menu-design').classList.toggle('show-menu');
});

document.getElementById('menu-close').addEventListener('click', function() {
  console.log('close function was clicked');
  document.querySelector('.side-menu-design').classList.remove('show-menu');
});
// drop-down menu js
function menuTwoShow(){
    document.getElementById('menu-2').classList.add('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
    document.getElementById('menu-5').classList.remove('show');
    document.getElementById('menu-6').classList.remove('show');
  }
function menuThreeShow(){
    document.getElementById('menu-3').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
    document.getElementById('menu-5').classList.remove('show');
    document.getElementById('menu-6').classList.remove('show');
}
function menuFourShow(){
    document.getElementById('menu-4').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-5').classList.remove('show');
    document.getElementById('menu-6').classList.remove('show');
}
function menuFiveShow(){
    document.getElementById('menu-5').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
    document.getElementById('menu-6').classList.remove('show');
}
function menuSixShow(){
    document.getElementById('menu-6').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
    document.getElementById('menu-5').classList.remove('show');
}
  function menusHide() {
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
    document.getElementById('menu-4').classList.remove('show');
    document.getElementById('menu-5').classList.remove('show');
    document.getElementById('menu-6').classList.remove('show');
  }
document.getElementById('menu-2-button').addEventListener('mouseover', menuTwoShow);
document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
document.getElementById('menu-4-button').addEventListener('mouseover', menuFourShow);
document.getElementById('menu-5-button').addEventListener('mouseover', menuFiveShow);
document.getElementById('menu-6-button').addEventListener('mouseover', menuSixShow);

document.getElementById('menu-2').addEventListener('mouseleave', menusHide);
document.getElementById('menu-3').addEventListener('mouseleave', menusHide);
document.getElementById('menu-4').addEventListener('mouseleave', menusHide);
document.getElementById('menu-5').addEventListener('mouseleave', menusHide);
document.getElementById('menu-6').addEventListener('mouseleave', menusHide);
// text double click function
function textDoubleClick(){
  document.getElementById("demo").innerHTML= "Please fill-out Contact Form";
}
function textDoubleClick1(){
  document.getElementById("demo1").innerHTML= "Installation can be done within 3 business days";
}
function textDoubleClick2(){
  document.getElementById("demo2").innerHTML= "10 years Warranty";
}