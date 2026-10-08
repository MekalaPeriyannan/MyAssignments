
// Named Function
function greet(studentName){
    console.log(`Hi ${studentName}, Welcome to first day of Course`)
}
console.log("************Named Function****************")
greet("Mekala")
greet("Kanmani")
greet("Sasitharan")

console.log("**************Anonymous Function**************")
//Expression also called Anonymous Function // coz no function name used here
let multiNum = function (a,b){
    return a*b
}
console.log("Multiplication of 3 and 2 is " + multiNum(3,2))
console.log(multiNum(3,2) * multiNum(4,5))


console.log("*************Arrow Function****************")
//Arrow Function - widely recommended
const addNum = (a,b) => a+b
console.log("Addition of 5 and 10 is " + addNum(5,10))


console.log("****************Immediately Invoked Function Expression*****************")
// IIFE Function
;(function(empName){
    console.log(`Hi ${empName}, How are you`)
})
("Mekan")


console.log("*****************Callback Function*******************")
//callback function
function recommendedMovie(){
    console.log("Track the user history")
}

function aiRecommendation(){
    console.log("Optimized the movie recommendation")
}

function profileLogin(userName,history,suggestion){
    console.log(`welcome ${userName}, to Amazon Prime`)
    history()
suggestion()
}
profileLogin("Mekala", recommendedMovie, aiRecommendation)

