//Get user input
var filter=document.querySelector("#filter")

//Add event listener to listen to user input
filter.addEventListener("keyup", filterNames)

//filter out list depends on the user input
function filterNames(){
    //Get value of user input
    var value= filter.value;

    //Get all names in list
    var names=document.querySelectorAll("li a")

    //Loop over names
    for(var i=0;i<names.length;i++){
        //compare names
        if(names[i].innerText.toUpperCase().includes(value.toUpperCase)){
            name[i].parentElemtent.style.display="block"
        } else {
            names[i].style.display="none"
        }
    }
}