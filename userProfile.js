function userProfileValidate()
{

var oldPasswordField= document.getElementById("inputOldPassword");
var oldPassword= document.getElementById("inputOldPassword").value;
var newPasswordField= document.getElementById("inputNewPassword");
var confirmPasswordField= document.getElementById("inputConfirmPassword");
var newPassword= document.getElementById("inputNewPassword").value;
var confirmPassword= document.getElementById("inputConfirmPassword").value;


if(oldPassword=="")
{
    oldPasswordField.focus();
    oldPasswordField.title="old password empty!!"  
    return false;
}

if(newPassword=="")
{
    newPasswordField.focus();
    newPasswordField.title="new password empty!!"  
    return false;
}

if(confirmPassword=="")
{
    confirmPasswordField.focus();
    confirmPasswordField.title="confirm password empty!!"  
    return false;
}


msgPassword="Invalid password:\n";
        var flag=true;
        if(newPassword.length<6)
        {
            msgPassword+="minimum of 6 letters\n"; 
            flag=false;
        }
         
        if(!newPassword.match(/[a-z]/g)){
            msgPassword+="Must contains lowercase letter\n"; 
            flag=false;
          
        }
        
        if(!newPassword.match(/[A-Z]/g)){
          msgPassword+="Must contains uppercase letter\n"; 
          flag=false;
        }
          if(!newPassword.match(/[0-9]/g))  {
          msgPassword+="Must contains at least one digit\n";
          flag=false;
          }
          if(!newPassword.match( /[^a-zA-Z\d]/g)){
          msgPassword+="Must contains at least one special key\n";
          flag=false;
          }
          if(!newPassword.match( /^[a-zA-Z0-9!@#\$%\^\&*\)\({\}+=.;:_-]+$/g)){
                msgPassword+="contains unsupported keys\nsupported keys are:! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > <";
                flag=false;
                }
           if(flag==false){
            newPasswordField.focus();
            newPasswordField.title=msgPassword;
            
            return false;
              
           }
           
           if(newPassword!=confirmPassword){
                
            newPasswordField.title="passwords are not matched";
            newPasswordField.focus();
                confirmPasswordField.title="passwords are not matched";
               return false;
           }

           $("#exampleModalUserProfile").modal("show");
           return true;
    }






















/*// When the user clicks on any of the password fields, show the message box
oldPasswordField.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
oldPasswordField.onblur = function() {
    document.getElementById("message").style.display = "none";
}

newPasswordField.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
newPasswordField.onblur = function() {
    document.getElementById("message").style.display = "none";
}

confirmPasswordField.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
confirmPasswordField.onblur = function() {
    document.getElementById("message").style.display = "none";
}*/
