/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

 var sum = function(a, b) {
    return a + b;
 }

sum(3, 6);
returns 9

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var matt = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5,
    finishingTime6: 227.4
};

var mark = {
    finishingTime1: 120, //in minutes
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5
};

var getAverageTime = function(person) {
    if (person.finishingTime6 === undefined) {
      return (person.finishingTime1 + person.finishingTime2 + person.finishingTime3 + person.finishingTime4 + person.finishingTime5)/Object.keys(person).length;
    }
    else {
      return (person.finishingTime1 + person.finishingTime2 + person.finishingTime3 + person.finishingTime4 + person.finishingTime5 + person.finishingTime6)/Object.keys(person).length;
    }
}

console.log(getAverageTime(matt));
console.log(getAverageTime(mark));
//** Feels like a hack... can't seem to figure out how to make a general rule for objects with various amounts of properties.



/**
 * PART 3
 *
 *
 * Modify the following to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

function addToBank(account, savings, retirement, checking) {
    "use strict";
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

function getSumOfAccounts(account) {
  return account.savings + account.checking + account.retirement;
}

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfMatts - sumOfRobertos); // should calculate to -158
