function login(){
    var name= document.getElementById("name").value;
    var password= document.getElementById("pass").value;
    if((name=="Banu" && password=="291002")||(name=="priya"&& password=="291002"))
    {
        alert("login successfully");
        return true;
    }
    else if(name!="Banu" || name=="")
    {
        alert("Enter Username or Incorrect Username");
        return false;
    }
    else if(password!="291002" || password=="")
    {
        alert("Enter Password or Incorrect Password");
        return false;
    }
    else{

    }
}