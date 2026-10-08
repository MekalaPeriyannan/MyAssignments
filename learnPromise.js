
function verifyLogin(username,password){
    return new Promise((resolve,reject) => {
        console.log("Authenticating.....")
        setTimeout(()=>{
            if(username === "Mekala" && password=== "abcd123"){
                resolve("Login successful, Home page is visible")
            } else {
                reject("Invalid Credentials, still in the login page")
            }
        },2000)
    })
}

// using .then() and .catch()
//verifyLogin ("Mekala","abcd123")
//.then((result)=>{console.log(result)})
//.catch((error)=>{console.log(error)})
//.finally(()=>{console.log("Asynchronous operation completed successfully")})

async function checkLogin(uname,pwd) {
    try{
        const successMessage= await verifyLogin(uname,pwd)
        console.log(successMessage)
    } catch(error){
        console.log(error)
    } finally {
        console.log("Asynchronous operation completed successfully")
    }
}
checkLogin("Meks","abcd")