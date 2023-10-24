// Selecting DOM element for dynamic styling

const cardname = document.querySelector(".cardname");
const cardnumber = document.querySelector(".number");
const cvc = document.querySelector(".cvcnumber");
const expiry = document.querySelector(".exp");
const button = document.getElementById("button");
const messagecvc = document.getElementById("messagecvc");
const messageexp = document.getElementById("messageexp");
const messagename = document.getElementById("messagename");
const messagenumber = document.getElementById("messagenumber");
const container = document.querySelector(".right-side");

// Function for running the validations. border are coloured red if the input field are empty, green if they are not empty

const checkName = () => {
  if (cardname.value.length === 0) {
    cardname.style.borderColor = "red";
    messagename.style.display = "block";
  } else {
    cardname.style.borderColor = "green";
    messagename.style.display = "none";
  }

  if (cardnumber.value.length === 0) {
    messagenumber.style.display = "block";
    cardnumber.style.borderColor = "red";
  } else {
    cardnumber.style.borderColor = "green";
    messagenumber.style.display = "none";
  }

  if (cvc.value.length === 0) {
    cvc.style.borderColor = "red";
    messagecvc.style.display = "block";
  } else {
    cvc.style.borderColor = "green";
    messagecvc.style.display = "none";
  }

  if (expiry.value.length === 0) {
    expiry.style.borderColor = "red";
    messageexp.style.display = "block";
  } else {
    expiry.style.borderColor = "green";
    messageexp.style.display = "none";
  }

  // if the input field is empty, return false
  if (
    cardname.value.length === 0 &&
    cardnumber.value.length === 0 &&
    expiry.value.length === 0 &&
    cvc.value.length === 0
  ) {
    return false;
  } else {
    return true;
  }
};

//  Button for listening for the submit event.
button.addEventListener("click", (e) => {
  e.preventDefault();
  checkName();
  // if the input fields are empty, stop the further execution of the code
  if (!checkName()) {
    return;
  }

  //   this section is to replace everything in the div container selected with the query selector which houses the input section with the thank you modal.
  container.innerHTML = `<div class="right-side thank-you-sec">

        <div class="icon">
            <img src="img/checkmark icon.svg" alt="">
        </div>

        <div class="info-details">
            <h2>THANK YOU!</h2>
            <p> We've added your card details</p>
        </div>
      <button class="continue">Continue</button>
    </div>
`;
});
