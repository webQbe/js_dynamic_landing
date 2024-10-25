// Define DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    answer = document.getElementById('focus');

// Show Time
function showTime(){

    // Get current time 24-hour format
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM'

    // Convert to 12hr format
    hour = hour % 12 || 12;

        /* || 12:

        The || (logical OR) operator checks if the value on the left is falsy 
        (which includes 0). 
        
        If the left value is falsy, it assigns the value on the right (12).

        This ensures that when the hour % 12 results in 0 (for hours 0 or 12),
        it is replaced by 12. 
        
        */

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    // Update time every sec
    setTimeout(showTime, 1000);

}


// Add Zeros
function addZero(n){

    // If number 'n' is less than 10, add a 0
    return (parseInt(n, 10) < 10 ? '0' : '') + n ;

    /* 

       parseInt() is a function that converts the string n into an integer.

       The second argument, 10, specifies the base (decimal) in which to interpret n.
       
    */
}

// Set Background Image and Greeting
function setBgGreet(){

    let today = new Date(),
        hour = today.getHours();

    // Check time of the day
    if(hour < 12){

        // Morning
        // Set Background Image
        document.body.style.backgroundImage = "url('../img/morning.jpg')";

        // Set Greeting
        greeting.textContent = 'Good Morning!';


    } else if(hour < 18) {

        // Afternoon
        // Set Background Image
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";

        // Set Greeting
        greeting.textContent = 'Good Afternoon!';

        // Change Font Color
        document.body.style.color = 'black';
       

    } else {

        // Evening
        // Set Background Image
        document.body.style.backgroundImage = "url('../img/night.jpg')";

        // Set Greeting
        greeting.textContent = 'Good Evening!';
            
    }    

}

// Get Name from Local Storage
function getName(){

    // Check if name is stored
    if(localStorage.getItem('name') === null){

        // If name not found
        name.textContent = '[Enter Name]';

    } else {

        // If name found, display name
        name.textContent = localStorage.getItem('name');

    }

}


// Get Answer from Local Storage
function getAnswer(){

    // Check if answer is stored
    if(localStorage.getItem('answer') === null){

        // If answer not found
        answer.textContent = '[Enter Focus]';

    } else {

        // If answer found, display answer
        answer.textContent = localStorage.getItem('answer');

    }

}


// Listen for name element

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

// Save Name to Local Storage
function setName(e){

    // Check if event is keypress
    if(e.type === 'keypress'){

        // Check if pressed key is Enter (13)
        if(e.which == 13 || e.keyCode == 13){

            // Save text from name
            localStorage.setItem('name', e.target.innerText);

            name.blur(); // prevent cursor moving to new line
        }

    } else {
     
        // On blur event
        localStorage.setItem('name', e.target.innerText);

    }
    

}


// Run Clock
showTime();

// Run Background & Greeting
setBgGreet();

// Get Name from Local Storage
getName();

// Get Answer from Local Storage
getAnswer();
