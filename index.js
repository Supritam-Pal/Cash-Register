
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes =[2000,500,200,100,50,20,10,5,2,1]
checkButton.addEventListener("click", function validBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    
    if (cashGiven.value >= billAmount.value) {
      
      const amountToBeReturned = cashGiven.value - billAmount.value; // 2022 - 12 = 2010
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  
  for (let i = 0; i < availableNotes.length; i++) {
  
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    

    
    amountToBeReturned %= availableNotes[i];
    

    
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
