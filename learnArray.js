let subjectName = "Tamil,English,Maths,Science,SocialScience"
let subjectList = subjectName.split(",")
console.log(subjectList)

console.log(subjectList.length)
console.log(subjectList.pop())  // remove last element
console.log(subjectList.shift())  //remove first element
console.log(subjectList)
subjectList.push("Chemistry")    // add new element at last
subjectList.unshift("Physics")   // add new element from begining
console.log(subjectList)

console.log(subjectList.slice(1,4))    // extract element from array. end value will not be printed
console.log(subjectList)
//subjectList.splice(2,2)   // 2 - start index , 2 - delete count from start index
//console.log(subjectList)

subjectList.splice(2,1,"PET")   // replace new value from start index
console.log(subjectList)
//subjectList.splice(2,0,"Botany","Zoology")   //inserting values from start index
//console.log(subjectList)

subjectList.forEach((subject)=>{   // print one after another
    console.log(subject)
})

console.log(subjectList.sort())  // Alphabetic order