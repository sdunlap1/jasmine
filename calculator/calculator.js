window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmt = document.getElementById("loan-amount");
  const loanYrs = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");

  loanAmt.value = "500000";
  loanYrs.value = "30";
  loanRate.value = "7";
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const mnthPmt = calculateMonthlyPayment(values);
  updateMonthly(mnthPmt);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const rate = values.rate / 100 / 12;
  const pmts = values.years * 12;

  const mnthPmts = principal * (rate * Math.pow(1 + rate, pmts)) / (Math.pow(1 + rate, pmts) - 1);
  return mnthPmts.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const mnthPayment = document.getElementById("monthly-payment");
  mnthPayment.textContent = "$" + monthly;
}
