// Reverse the character of the string one by one
let subject = "Mathematics"
for(i=subject.length; i>=0; i--)
{
    console.log(subject.charAt(i))
}

// Reverse the string 
let string = "Playwright"
let reverseString = ""

for(i=string.length-1; i>=0 ; i--){
    reverseString += string.charAt(i)
}
console.log(reverseString)


// another way
let string1 = "Automation"
let reversed = string1.split("").reverse().join("")
console.log(reversed)
