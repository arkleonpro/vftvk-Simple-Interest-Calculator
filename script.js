// Exercise 4: Completed Steps 1 to 17
// 1. Before we start writing any javascript, make sure that the button in html file has the onclick attribute set to "compute()" --done!

function compute() { // function to compute interest

    // Add validation for "principal"/(amount) input box. See function checkPrincipal() below.
    if (checkPrincipal()== true) {
        //2. Create a variable called 'principal' and assign to it the value of the input element "principal"
        var principal = document.getElementById("principal").value;
        //3. Create a variable called rate and assign to it the value of the input element "rate"
        var rate = document.getElementById("rate").value;
        //4. Create a variable called years and assign to it the value of the input element "years"
        var years = document.getElementById("years").value;
        //5. Create a variable called interest and assign to it the value of principal * years * rate / 100
        var interest = principal * years * rate /100; 
        //6. Write the logic to convert the 'No of Years' into the actual year in the future.
        var year = new Date().getFullYear()+parseInt(years);

        //10. Get the reference to the element named 'result'
        //11. When "Compute Interest" is clicked, set its inner html property to the specified text.
        //12. Make sure that the input you have taken as "No of Years" is converted into an actual year. --checked!
        //13. Make sure the numbers in the result are highlighted. --done!
        document.getElementById("result").innerHTML= "If you deposit \<mark\>"+principal+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>.\<br\>You will receive an amount of \<mark\>"+interest+"\<\/mark\>,\<br\>in the year \<mark\>"+year+"\<\/mark\>\<br\>";
    }
    else {
        return false;
    }

}

//7. Write a function that reads the value of the range slider and displays it the <span>adjacent to the slider.
function updateRate() { 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//8. Link this function with an "onchange" event on the range input. --done!
//9. Change the slider, and test if the display in the span is being updated dynamically. --done!


//14. Add validation for "principal"/(amount) input box. If the user enters zero or negative values, show an alert "Enter a positive number"...
function checkPrincipal() {
    var principal = document.getElementById("principal");    
    if (principal.value <= 0) {
        alert("Enter a positive number");
        //15. Once the user clicks on the alert "OK" button, take the user back to the "principal"/(amount) input box, by setting the focus on this box. --it works!
        principal.focus();
        return false;
    }
    else {
        return true;
    }
    //...else if principal field is good, proceed with computing interest 
}

//16. You are done with the coding. Let us proceed to next exercise where we test the code.
//17. Write comments in your code. They not only help you score more marks in the project, but also help you to debug and maintain the code in the long term.
