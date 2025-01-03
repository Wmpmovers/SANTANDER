let date1 = Date();
document.getElementById("date").innerHTML =
date1;

// SAVINGS ACCOUNT
function eyeA() {
    const balanceelementSavings = document.getElementById('money');
    const currentTest = balanceelementSavings.innerText;
  
    if (currentTest.includes('*')) {
      balanceelementSavings.innerText = '$9,510,200'; // Change to your actual balance
    } else {
      balanceelementSavings.innerText = '************'; // Masked version
    }
  }

  // CHECKING ACCOUNT
function eyeB() {
  const balanceelementSavings = document.getElementById('moneyB');
  const currentTest = balanceelementSavings.innerText;

  if (currentTest.includes('*')) {
    balanceelementSavings.innerText = '$600,200'; // Change to your actual balance
  } else {
    balanceelementSavings.innerText = '*************'; // Masked version
  }
}

  // BUSINESS ACCOUNT
  function eyeC() {
    const balanceelementSavings = document.getElementById('moneyC');
    const currentTest = balanceelementSavings.innerText;
  
    if (currentTest.includes('*')) {
      balanceelementSavings.innerText = '$200,000'; // Change to your actual balance
    } else {
      balanceelementSavings.innerText = '*************'; // Masked version
    }
  }


// TRANSTER FORM
document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
  
    // Hardcoded valid credentials for simplicity (you can replace this with a real authentication system)
    const validUsername = 'gooo';
    const validPassword = "1234";
  
  
    // Validate the credentials
    if (username === validUsername && password === validPassword ) {
      alert(" Your Transaction is Successfull")
    } else {
      alert("We won't be able to proccess your transaction at the moment, please contact the customer care service. Thanks!!!")
      // Show an error message if the login fails
      // let errorM = document.getElementById('error-message');
      // errorM.innerHTML = 'Your username or password is incorrect, please try again!';
      // errorM.style.color = "red";
    }
  });


//   FUNCTION FOR BUTTON
let firstCard = document.getElementById("innerCards");
let secondCard = document.getElementById("innerCards2");
let thirdCard = document.getElementById("innerCards3");
let savingss = document.getElementById("savingss");
let checkingss = document.getElementById("checkingss");
let cardss = document.getElementById("cardss");

savingss.style.color = "red";
function saving(){
  savingss.style.color = "red";
  checkingss.style.color = "";
  cardss.style.color = "";
  firstCard.style.display = "block";
  secondCard.style.display = "none";
  thirdCard.style.display = "none";
}
function checking(){
  savingss.style.color = "";
  checkingss.style.color = "blue";
  cardss.style.color = "";
   firstCard.style.display = "none";
   secondCard.style.display = "block";
   thirdCard.style.display = "none";
}

function card(){
  cardss.style.color = "green";
  savingss.style.color = "";
  checkingss.style.color = "";
  thirdCard.style.display = "block";
  secondCard.style.display = "none";
  firstCard.style.display = "none";
}

