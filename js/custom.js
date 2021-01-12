// Custom JS

// is the input a number? dont let user type anything if not a number
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

// Clear the document when the clear button is clicked
document.getElementById("clearButton").addEventListener("click", function(){
    document.getElementById("table").innerHTML = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
});

// When the user pushes the Buzz button
document.getElementById("buzzButton").addEventListener("click", function(){
    let largeString = ""; // to store all the HTML used for the table
    let styleStrings = []; // to store all the color styles for the cells of the table
    let innerStrings = []; // to store all the FIZZ and BUZZ strings to show in the table

    // make 100 elements on each array
    for(let i = 0; i <= 100; i++){
        styleStrings.push(" ");
        innerStrings.push(`${i}`);
    }

    // get the numbers from whatever the user has typed in the input field
    let number1 = parseInt(document.getElementById("input1").value, 10);
    let number2 = parseInt(document.getElementById("input2").value, 10);

    // Loop though all parts of the arrays and set them to the multiples values
    // The center logic of how FIZZ BUZZ works using modulus
    for(let i = 0; i <= 100; i++){
        if(i%number1 == 0){
            styleStrings[i]="background-color: rgb(142, 159, 255);";
            innerStrings[i]="FIZZ";
        }
        if(i%number2 == 0){
            styleStrings[i]="background-color: rgb(37, 255, 84);";
            innerStrings[i]="BUZZ";
        }
        if(i%number1 == 0 && i%number2 == 0){
            styleStrings[i]="background-color: rgb(255, 80, 80);";
            innerStrings[i]="FIZZ BUZZ";
        }
    }

    // If the lengths of any of the input fields are 0 then tell the user to type something 
    if(document.getElementById("input1").value.trim().length == 0 || document.getElementById("input2").value.trim().length == 0){
        document.getElementById("textBelow").innerText = "Please type numbers in each field.";
    }

    //otherwise we have somthing to output and we can set the large string to all the HTML with 
    // the features we assigned to the arrays
    else{
        for(let i = 1; i <= 100; i+=4){
            largeString += `<tr>
                                <td style="${styleStrings[i]}" id="id${i}">${innerStrings[i]}</td>
                                <td style="${styleStrings[i+1]}" id="id${i+1}">${innerStrings[i+1]}</td>
                                <td style="${styleStrings[i+2]}" id="id${i+2}">${innerStrings[i+2]}</td>
                                <td style="${styleStrings[i+3]}" id="id${i+3}">${innerStrings[i+3]}</td>
                            </tr>`;
        }
    }

    // Set the HTML string to the inner HTML of the table which applies everything to the page
    document.getElementById("table").innerHTML = largeString;
});