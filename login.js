function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

if(username=="Manisha"&& password=="123456" )
{

alert(window.open("index.html"));
 return false;
}
else{
 alert("login failed");
 window.open("login.html");
}

}
