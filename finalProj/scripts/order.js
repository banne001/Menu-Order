class order{
    constructor(eat, filling, rice, beans, toppings){
        this.eat = eat;
        this.filling = filling;
        this.rice = rice;
        this.beans = beans;
        this.toppings = toppings;
    }
    printItem(){
        let txt = `Type: ${this.eat}<br>Filling: ${this.filling}<br>Rice: ${this.rice}<br>Beans: ${this.beans} <br>Toppings: `;
        for(let top of this.toppings){
            txt += top.value + "<br>";
        }
        return txt;
    }
}

document.getElementById("add").addEventListener("click", addToBag);
const sendorder=document.getElementById("sendorder");
const total = document.getElementById("Subtotal");
const form = document.getElementById("ordering");
const receipt = document.getElementById("orders");

//varaibles
let orders =[];
let sub=0;
let added= false;

// add the item to the order.
function addToBag(){
    console.log(check());
    if(check()){
        added = true;
        let eat = radiobutton("how");
        let filling = document.getElementById("filling").value;
        let rice = radiobutton("rice");
        let beans = radiobutton("beans");
        let toppings = checkboxes();
        let item = new order(eat, filling, rice, beans, toppings);
        orders.push(item);
        printOrder();
        sub+=5;
        total.textContent="Total: $" + sub.toFixed(2);
        form.reset();
    }
}
// retrieves the radio buttion that is checked
function radiobutton(id){
    let radio = document.getElementsByName(id);
    for(i=0; i<radio.length; i++){
        console.log(radio[i].value)
        if(radio[i].checked){
            console.log(radio[i].value);
            return radio[i].value;
        }
    }
}
// retrives the checkboxes that are checked
function checkboxes(){
    let top = document.getElementsByName("topping");
    let tops = []
    for(i=0;i<top.length;i++){
        if(top[i].checked){
            tops.push(top[i]);
            console.log(tops.length);
        }
    }
    return tops;
}

function deleteDiv(e){
    let $index = $(e.target).parent().attr('id');
    console.log(e.target);
    e.target.remove();
    sub-=5;
    total.textContent="Total: $" + sub.toFixed(2);
    orders.splice($index,1);
    printOrder();
}

function printOrder(){
    for(let i=0; i<orders.length; i++){
        console.log(i);
        console.log(orders[i].printItem());
    }
    let child = receipt.lastElementChild;
    while(child){
        receipt.removeChild(child);
        child = receipt.lastElementChild;
    }
    sendorder.value = "";
    for(let i=0; i<orders.length; i++){
        let item = document.createElement("div");    
        item.addEventListener('dblclick', deleteDiv);
        let text = document.createElement("h6");
        item.setAttribute("id", `${i}`);
        text.innerHTML = "Item "+(i+1)+ "<br>"+orders[i].printItem();

        sendorder.value +=  text.innerHTML.trim();

        item.appendChild(text);

        receipt.appendChild(item);
    }
}


// Validates the item to order
function check(e){
    let eat = validateRadioButton("how", "error-how");
    let filling = validateSelectList("filling", "error-filling");
    let rice = validateRadioButton("rice", "error-rice");
    let beans = validateRadioButton("beans", "error-beans");
    let allcorrect = filling && rice && beans
    if(allcorrect === false){
        return false;
    }
    return true;
}


// Form for Submission

document.getElementById("chipozyl").addEventListener("click", validate);

function validate(e){
    let name = validateInputField("fname", "error-fname");
    let lname = validateInputField("lname", "error-lname");
    let how = validateRadioButton("method", "error-methods");

    let allcorrect = name && lname && how;
    if(allcorrect === false || added ===false){
        e.preventDefault();
    }
}