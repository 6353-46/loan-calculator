// Get button reference
let button = document.querySelector(".calculate");
// Add event listener
button.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Get current values when button is clicked
    let pamount = parseFloat(document.getElementById("amount").value);
    let interest = parseFloat(document.getElementById("irate").value);
    let year = parseFloat(document.getElementById("time").value);
    
    // Calculate and display EMI
    let result = calculateemi(pamount, interest, year);
    
 
    document.querySelector(".result").textContent = "EMI: " + result.toFixed(2);
});

// EMI calculation function
let calculateemi = (pamount, interest, year) => {
    // Validate inputs
    if (isNaN(pamount) || isNaN(interest) || isNaN(year)) {
        alert("Please enter valid numbers in all fields");
        return NaN;
    }
    
    let r = (interest/12/100);
    let n = year * 12;
    
    // Handle special case
    if (interest === 0) {
        return pamount / n;
    }
    
    return (pamount * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
}

