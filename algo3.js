/*
Given a number that represents the position of the minute hand on a clock 
(number of minutes from 0 - 60) write a program that returns the angle that is formed by 
the minute hand and 12.

If the user enters a number that is above 60, your program should fail, 
and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/


function minuteAngle(minute) {
    if (minute > 60) {
        console.log("The numer should not be above 60");
        return;
    } 

    // This wil give the angle for the correspondent min:
    let minuteByAngle = 360 * (minute / 60);

    return minuteByAngle;
}

// console.log(minuteAngle(0)); // To test only.

let numeberMinute = prompt('Enter the number corresponding to the minutes:');
// document.write(minuteAngle(numeberMinute)); // To test only.
console.log(minuteAngle(numeberMinute));

