// LOGIN FORM
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
  
    // Hardcoded valid credentials for simplicity (you can replace this with a real authentication system)
    const validUsername = 'angelakylie@gmail.com';
    const validPassword = 'angela123';
    const validUsernameBen = 'bensontrimble@gmail.com';
    const validPasswordBen = 'benson123';
  
    // Validate the credentials
    if (username === validUsername && password === validPassword) {
    //   alert('Login successful!');
      // Redirect to another page or perform further actions after successful login
      window.location.href = '../DASHBOARD2/dashboard2.html';
    } else if(username === validUsernameBen && password === validPasswordBen){
      window.location.href = '../DASHBOARDben/dashboardben.html';
    }
    else {
      // Show an error message if the login fails
      let errorM = document.getElementById('error-message');
      errorM.innerHTML = 'Your username or password is incorrect, please try again!';
      errorM.style.color = "red";
    }
  });
  
