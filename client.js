// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



function calculateIndividualEmployeeBonus(employee) {

  console.log("calculateIndividualEmployeeBonus() was called with param: ", employee)

  let bonusPercentage = 0
  // * Convert annualSalary into a number, from string
  const salaryNumber = Number(employee.annualSalary)

  // Review Rating Rules

  // If rating is <= 0, no change to bonus
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0
  }
  // If rating == 3, bonus = 4
  if (employee.reviewRating === 3) {
    bonusPercentage = 4
  }
  // If rating is 4, bonus = 6
  if (employee.reviewRating === 4) {
    bonusPercentage = 6
  }
  // If rating is 5, bonus = 10
  if (employee.reviewRating === 5) {
    bonusPercentage = 10
  }
  // console.log("Bonus after rating review: ", bonusPercentage)


  // Employee number rule
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 5
  }
  // console.log("Bonus after employee number review:", bonusPercentage)


  // Rule If income is above 65k, minus 1%
  if (salaryNumber > 65000) {
    bonusPercentage -= 1
  }
  // console.log("Bonus after income review:", bonusPercentage)

  // Rule for max an min of percentage
  if (bonusPercentage >= 13) {
    bonusPercentage = 13
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0
  }
  // console.log("Bonus after min/max:", bonusPercentage)

  // Calculate total bonus
  // Convert percentage number into a decimal number
  let bonusAsDecimal = bonusPercentage / 100
  let totalBonus = Math.floor(salaryNumber * bonusAsDecimal)

  // Calculate total compensation
  let totalCompensation = salaryNumber + totalBonus


  // Return an object with the following properties:
  let result = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensations: totalCompensation,
    totalBonus: totalBonus
  }

  return result

}

// ! TEST:
// Test for 1 employee
// let singleEmployeeTest = calculateIndividualEmployeeBonus(employees[2])
// console.log("singleEmployeeTest: ", singleEmployeeTest)

// Loop over the function, each instance of the loop will provide the next employee.
function testAllEmployees() {
  for (let employee of employees) {
    calculateIndividualEmployeeBonus(employee)
  }
}

testAllEmployees()