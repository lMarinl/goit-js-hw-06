
const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', handlerSubmitForms)

function handlerSubmitForms (event) {
  event.preventDefault()

  const  email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value

  if (password === '' || email === '') {
    
   return  alert("Please fill in all the fields!");
  }
  else {
    const formData = {
      email: email,
      password: password,
    }
    console.log(formData)
  }
  
  
  loginForm.reset();
  
}
