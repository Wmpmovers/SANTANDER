// CHECKING ACCOUNT
function eye() {
  const balanceElement = document.getElementById('money');
  const currentText = balanceElement.innerText;

  if (currentText.includes('*')) {
      balanceElement.innerHTML = 'USD$ 719,123,00'; // Change to your actual balance
  } else {
      balanceElement.innerHTML = '*************'; // Masked version
  }
}

// SAVINGS ACCOUNT
function eyeA() {
  const balanceelementSavings = document.getElementById('moneyA');
  const currentTest = balanceelementSavings.innerText;

  if (currentTest.includes('*')) {
    balanceelementSavings.innerText = 'USD$ 5,735,980'; // Change to your actual balance
  } else {
    balanceelementSavings.innerText = '*************'; // Masked version
  }
}

// BUSINESS ACCOUNT
function eyeB() {
  const balanceelementBusiness = document.getElementById('moneyB');
  const currentTest = balanceelementBusiness.innerText;

  if (currentTest.includes('*')) {
    balanceelementBusiness.innerText = 'USD$ 29,001'; // Change to your actual balance
  } else {
    balanceelementBusiness.innerText = '*************'; // Masked version
  }
}


// CREDIT ACCOUNT
function eyeC() {
  const balanceelementCredit = document.getElementById('moneyC');
  const currentTest = balanceelementCredit.innerText;

  if (currentTest.includes('*')) {
    balanceelementCredit.innerText = '820 Credit Score'; // Change to your actual balance
  } else {
    balanceelementCredit.innerText = '*************'; // Masked version
  }
}

// DISPLAY DATE ON DASHBOARD
let d = Date()
let dhate = document.getElementById("datee");
dhate.innerHTML = d;


// TRANSTER FORM
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








