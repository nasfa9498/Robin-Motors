let button = document.getElementById("home")

 button.addEventListener("click", function (e) {
    window.location.href = "Aboutus.html"; })

function validate() {
    if(document.myform.mobile.value.length!=10){
        document.getElementById("num").innerHTML=" !enter a valid number";
        document.myform.mobile.focus();
        return false;
    }
}

function myfun(){
    var a= document.myform.email.value;
    if(a.indexOf("@")<=0 ){
        document.getElementById("message").innerHTML=" !enter a valid email id";
        
        return false;
    }

    validate();
       
}

function reset(){
    document.getElementById("message").innerHTML="";
    document.getElementById("mobile").innerHTML="";
    document.getElementById("name").innerHTML="";
    return false;
    
    
}

function submitted(){
    
    alert("Hii"+" "+document.myform1.name.value+ ",we will get back you soon");
    
    
}

