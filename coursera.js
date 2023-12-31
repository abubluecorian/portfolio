var light = green;
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

//using SWITCH STATEMENT 
var light = green;
//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }

//  more examples of switch 
// Code the days of the week program as a switch statement
// On the next line, define a new variable, name it day, and set its value to "Sunday".

// Start coding a switch statement, passing the day variable as the expression to evaluate.

// Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

// At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

// Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

// Tips
// If you need to make sure that multiple conditions are true in an if statement, you can do so using the && operator

// In JavaScript, the correct syntax of the "greater than or equal to" operator is: >=.

// Don't forget to add a break at the very end of each case in a switch statement.
var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       //this block will run if no condition matches
       console.log('There is no such day');
}

// output - Have barbecue