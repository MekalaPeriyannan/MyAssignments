let i=1
while(i<=10){
    console.log(i)
    i++
}
console.log("Next Iteration Statement")
let j = 9
do {
    console.log(j)
    j++
}while(j<=10)

console.log("Next Iteration Statement")

let k=5
for(let k=1; k<=4; k++){
    console.log(k)
}

console.log("Printing odd numbers")
let num=7
for (let num=1;num<=7;num++)
{
    if(num %2 !== 1){
        continue
    }
    console.log(num)
}
//  Functional Requirement:
//  A player must complete at least 2 rounds and at most 5 rounds.
//  If the player is unhealthy, the game stops right after 2 rounds. 
//  If the player is healthy, the game continues up to 5 rounds.
console.log("Interview")
let isHealthy = false
const maxGoal = 5
const minGoal = 2
for (let round = 1; round <= maxGoal; round++) {
    // condition 1: ifHealty ,maxGoal
    // condition 2 : minGoal
    if (!isHealthy && round > minGoal) {
        break
    }
    console.log("round no :" + round + " completed");
}