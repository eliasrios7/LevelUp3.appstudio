//Functions
function carLoanPayment(p, i, n) {
  return p * i * (Math.pow(1+i,n)) / (Math.pow(1+i,n)-1)
  }
function homeLoanPayment(p, i, n) {
  return p * i * (Math.pow(1+i,n)) / (Math.pow(1+i,n)-1)
  }
  
let calcPay = 'Yes'
do
  {
let calcPay = prompt("Would you like to calculate monthly payments? Enter Yes or No")
if (calcPay == 'Yes' || calcPay == 'yes') {  
  
 //Car Loan Payment Main Program
let principle2 = prompt('Enter your car loan amount with no commas. ie 30000')
let interest2 = prompt('Enter your car loan interest rate. ie 3.2')
let numPay2 = prompt('Enter the number of years of your loan. ie 5')
principle3 = Number(principle2)
interest3 = Number(interest2) / 1200
numPay3 = Number(numPay2) * 12

let myAnswer2 = carLoanPayment(principle3, interest3, numPay3)
alert(`A carloan for $${principle2} over ${numPay2} years at ${interest2}% interest would have a monthly payment of $${myAnswer2}`)

//Home Loan Payment Main Program
let principle = prompt('Enter your home loan amount with no commas. ie 200000')
let interest = prompt('Enter your home loan interest rate. ie 5.7')
let numPay = prompt('Enter the number of years of your loan. ie 30')
principle1 = Number(principle)
interest1 = Number(interest) / 1200
numPay1 = Number(numPay) * 12

let myAnswer = homeLoanPayment(principle1, interest1, numPay1)
alert(`A home loan for $${principle} over ${numPay} years at ${interest}% interest would have a monthly payment of $${myAnswer}`) 
} else {
  break;
}
} while (calcPay === 'Yes' || calcPay === 'yes')


