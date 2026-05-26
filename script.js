function login()
{

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username == "geethika" && password == "2007")
        {

        alert("Login Successful ");

        window.location.href = "c:\\Users\\geeth\\OneDrive\\Documents\\Desktop\\dashboard in\\dashboard.html";

    }

    else{

        document.getElementById("message").innerHTML =
        "Invalid Username or Password";

    }

       
    
}

