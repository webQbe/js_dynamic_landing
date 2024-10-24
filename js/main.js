// Define DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

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
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

    // Update time every sec
    setTimeout(showTime, 1000);

}

// Run Clock
showTime();