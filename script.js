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
  //header menu mouse-over
document.getElementById('menu-2-button').addEventListener('mouseover', menuTwoShow);
document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
document.getElementById('menu-4-button').addEventListener('mouseover', menuFourShow);
document.getElementById('menu-5-button').addEventListener('mouseover', menuFiveShow);
document.getElementById('menu-6-button').addEventListener('mouseover', menuSixShow);
//header menu mouse-leave
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
function textDoubleClick3(){
  document.getElementById("demo3").innerHTML= "Victorian residents can apply for a rebate to help pay for a new solar panel system. The rebate gives households a discount of up to 50% of the purchase cost, to a maximum of $1,400 in 2020-21. Not-for-profit community housing providers are also eligible to apply on behalf of their tenants.";
}
//CHAT ICON FUNCTION
function openForm() {
      document.getElementById("myForm").style.display = "block";
    }
function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }
// Click alert function for header icons
    document. getElementById('menu-2-button'). onclick = function() { alert("About Us Page Under Construction"); };
    document. getElementById('menu-3-button'). onclick = function() { alert("Solar Page Under Construction"); };
    document. getElementById('menu-4-button'). onclick = function() { alert("AC Page Under Construction"); };
    document. getElementById('menu-5-button'). onclick = function() { alert("Hot Water Page Under Construction"); };
    document. getElementById('menu-6-button'). onclick = function() { alert("Efficient Products Under Construction"); };
    document. getElementById('menu-7-button'). onclick = function() { window.location.href = "contact-page.html" };
    document. getElementById('menu-8-button'). onclick = function() { window.location.href = "contact-page.html" };
    document. getElementById('menu-9-button'). onclick = function() { window.location.href = "contact-page.html" };
    document. getElementById('menu-10-button'). onclick = function() { window.location.href = "contact-page.html" };
    document. getElementById('menu-11-button'). onclick = function() { window.location.href = "contact-page.html" };
// Contact form on website
  const appForm = document.getElementById('site-contactForm');
  appForm.addEventListener('submit', function(event){
    event.preventDefault();
// contact form error box display for missing name
    const nameErrorBox = document.querySelector('.name-error-box');
    nameErrorBox.textContent = '';
   const nameInputElement = document.querySelector('#fname');
   const name = nameInputElement.value;
// if condition used for no name entered
    if (!name) {
      nameErrorBox.textContent = 'Your name cannot be empty.';
    } else if (name.length > 20) {
      nameErrorBox.textContent = 'Your name is too long!';
    }
// log output to confirm form is submitted
  console.log('Data Submitted:', appForm);
// reset the form once submitted
  appForm.reset();
  });
//send email
function sendEmail(){
  let parms = {
  name : document.getElementById("fname").value,
  phoneNumber : document.getElementById("phone").value,
  email : document.getElementById("name").value,
  subject : document.getElementById("subject").value,
  }
 emailjs.send("service_l37bj25","template_66grz8p",parms).then(alert("Email has been sent!!"))
}   
    