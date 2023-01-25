const s = document.querySelector(".button");
if(localStorage.length==0) 
{
    s.onclick = () => {
    // console.log("Swvevee");
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const cpassword = document.getElementById("cpassword").value;
    
        // console.log(name);
    
        localStorage.setItem("Name",name);
        localStorage.setItem("Email",email);
        localStorage.setItem("Password",password);
    
        if(name=="" && email=="" && password =="") {
            alert("Input field has no value!!")
        }
        else if(password != cpassword)
        {
            alert("Password not Matching!!");
        }
        else
        {
            alert("Registration Successfull");
        }
    }
}
else
{
    location.replace("index.html")
}