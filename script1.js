//CONTACT PAGE HTML JAVASCRIPT FILE
 const appForm = document.getElementById('contact-form');
 appForm.addEventListener('submit', function(event){
   event.preventDefault();
// contact form error box display for missing name 
   const nameErrorBox = document.querySelector('.name-error-box');
   nameErrorBox.textContent = ''; 
  const nameInputElement = document.querySelector('#name');
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
 