// TRANSFER FORM
document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
  
    // Hardcoded valid credentials for simplicity (you can replace this with a real authentication system)
    const validUsername = 'admin@gmail.com';
    const validPassword = 'password123';
  
  
    // Validate the credentials
    if (username === validUsername && password === validPassword ) {
    //   alert('Login successful!');
      // Redirect to another page or perform further actions after successful login
      alert("Successfull")
    } else {
      alert("We won't be able to proccess your transaction at the moment, please contact the customer care service. Thanks!!!")
      // Show an error message if the login fails
      // let errorM = document.getElementById('error-message');
      // errorM.innerHTML = 'Your username or password is incorrect, please try again!';
      // errorM.style.color = "red";
    }
  });
  