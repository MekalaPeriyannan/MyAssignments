let string1 = "silent"
let string2 = "listen"
let alterString1 = string1.split("").sort().join("")
let alterString2 = string2.split("").sort().join("")
if (alterString1 === alterString2){
    console.log("Given strings are Anagram")
}else{
    console.log("Given Strings are not Anagram")
}


