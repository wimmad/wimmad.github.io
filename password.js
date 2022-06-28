// function to check password
function checkPassword() {
    // capture the user input
    var password_box_object = document.getElementById("password_box");
    var password_entered = password_box_object.value;
    console.log("user entered this: ", password_entered);
    // check if it's a match & allow or block navigation
    var password_key = "cat";
    if (password_entered==password_key) {
        console.log("it's correct");
        // TRUE statement : loads the memebers page
        window.location.assign("members.html");
        // FALSE statement : red text appears to alert the user
    } else {
        console.log("its' wrong");
        document.getElementById("text_if_incorrect").style.color="red";
        document.getElementById("text_if_incorrect").innerHTML="It's wrong. Please try again";
        
    }  
}