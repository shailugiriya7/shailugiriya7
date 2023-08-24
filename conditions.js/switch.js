

var day = 7;
var dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Outputs: Tuesday


var score = 80;
var grade;

switch (true) {
    case score >= 95:
        grade = 'A+';
        break;

    case score >= 90:
        grade = 'A';
        break;

    case score >= 80:
        grade = 'B+';
        break;

    default:
        grade = 'F';
}

console.log('Your grade is:', grade);
