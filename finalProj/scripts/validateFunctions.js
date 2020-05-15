/**
 * This script will contain forrrm calidation functions that can be reusd
 */

 //This function receuces an id ID for the HTML input textbox

 function validateInputField(id, errorID){
    let txtval= document.getElementById(id).value;
    let errField = document.getElementById(errorID);
   //if text value is empty
   if(txtval===""){
       document.getElementById(errorID).className="error";
       return false;
   }else {
       errField.className ='hidden';
       return true;
   }
}

function validateCheckBox(id, errorID){
   let checkbox=document.getElementById(id).checked;
   let errField = document.getElementById(errorID);

   if(checkbox ===false){
       errField.className='error';
       return false;
   } else{
       errField.className="hidden";
       return true;
   }
}
function validateSelectList(id, errorID){
   let index = document.getElementById(id).selectedIndex;
   let errField = document.getElementById(errorID);
   if(index === 0){
       errField.className='error';
       return false;
   } else {
       errField.className = 'hidden';
       return true
   }
}

function validateRadioButton(name, errorName){
   let buttons = document.getElementsByName(name);
   let errField = document.getElementById(errorName);
   let count = 0; //keeps track of radio buttons that have it
   //loop through the buttons
   for(let i = 0; i < buttons.length; i++){
       if(buttons[i].checked === true){
           errField.className = 'hidden';
           count++;
       }
   }
   if(count === 0){
       errField.className='error';
       return false;
   } else {
       errField.className = 'hidden';
       return true
   }

}