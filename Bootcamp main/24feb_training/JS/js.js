function Alert() {
    alert('Hello');
}
function Confirm() {
    if(confirm("Are you sure.?")){
        alert("Yes");
    }
    else{
        alert("No");
    }
}
function Prompt(){
    var fName=prompt("Enter a firstname here");
    var lName=prompt("Enter a lastname here");
    alert(fName+" "+lName);
}