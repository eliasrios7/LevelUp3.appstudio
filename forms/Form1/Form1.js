/*
//a,b,c are local variables inside the function
function findAverage(a, b, c) {
    let average = (a + b + c)/3
    return average
}

// main program
let myAnswer = findAverage(10,20,30)
alert(myAnswer)
*/
//Car Loan Payment Branch info

//Function Program
function monthlyPayment(p, i, n) {
  return p * i * (Math.pow(1+i,n)) / (Math.pow(1+i,n)-1)
  }

//Main Program
let principle = 200000
let interest = .057 / 12
let numPay = 30 * 12

let myAnswer = monthlyPayment(principle, interest, numPay)
console.log(myAnswer)


  
  
  
  

