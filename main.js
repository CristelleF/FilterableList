//Get user input
const filter=document.querySelector("#filter")

//filter out list depends on the user input
 const filterNames ()=>{
    //Get value of user input
    const value= filter.value;

    //Get all names in list
    const names=document.querySelectorAll("li a")

    //Loop over names
    for(let name of names){

        //compare names
        if(names.innerText.toUpperCase().includes(value.toUpperCase())){
            name.parentElemtent.style.display="block"
        } else {
            name.parentElement.style.display="none"
        }
    }
}
//Add event listener to listen to user input
filter.addEventListener("keyup", filterNames)