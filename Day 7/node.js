
function demoExternalAlert()
{
    alert("Internal alert");
}
function demoExternalConfirm()
{
    if(confirm("Are you sure..??"))
    {
        alert("Yes")
    }
    else
    {
        alert("No")
    }
}
function demoExternalPrompt()
{
    var fname=prompt("Enter first name");
    var lname=prompt("Enter last name");
    alert(fname + " " +lname);
}
