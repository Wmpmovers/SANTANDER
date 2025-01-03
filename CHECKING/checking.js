// LOGIN FORM
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
  
    // Hardcoded valid credentials for simplicity (you can replace this with a real authentication system)
    const validUsername = 'bensontrimble@gmail.com';
    const validPassword = 'benson123';
  
    // Validate the credentials
    if (username === validUsername && password === validPassword) {
    //   alert('Login successful!');
      // Redirect to another page or perform further actions after successful login
      window.location.href = '../INNERPAGE/inner.html';
    } else {
      // Show an error message if the login fails
      let errorM = document.getElementById('error-message');
      errorM.innerHTML = 'Your username or password is incorrect, please try again!';
      errorM.style.color = "red";
    }
  });