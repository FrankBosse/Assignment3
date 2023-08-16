/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Variables needed for calculations and display
var dailyRate = 35;
var nmbDaysSelcted = 0;
var calculatedCost = document.getElementById('calculated-cost');
// Weekdays
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thu = document.getElementById('thursday');
var fri = document.getElementById('friday');
// Total per day
var fullDay = document.getElementById('full');
var halfDay = document.getElementById('half');
// Clear button
var clearButton = document.getElementById('clear-button');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mon.onclick = function() {
    dayClicked(mon);
};

tue.onclick = function() {
    dayClicked(tue);
};

wed.onclick = function() {
    dayClicked(wed);
};

thu.onclick = function() {
    dayClicked(thu);
};

fri.onclick = function() {
    dayClicked(fri);
};

function dayClicked(ele) {
    if(!ele.classList.contains("clicked")) {
        nmbDaysSelcted += 1;
        console.log(nmbDaysSelcted);
        ele.classList.add("clicked");
        calculate();
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.onclick = clear;

function clear() {
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thu.classList.remove("clicked");
    fri.classList.remove("clicked");
    nmbDaysSelcted = 0;
    calculatedCost.innerHTML = 0;
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDay.onclick = halfDayClicked;

function halfDayClicked() {
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDay.onclick = fullDayClicked;

function fullDayClicked() {
    dailyRate = 35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    calculatedCost.innerHTML = dailyRate * nmbDaysSelcted;
}