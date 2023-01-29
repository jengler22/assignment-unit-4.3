console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
    
}
// added eggs to basket
let result = addItem('eggs');
console.log(result);
console.log(`I have ${basket} in my basket`);
// list all itmes in basket
function listItems() {
    for (let item of basket) {
        console.log(`I have ${basket} in my basket`);
    }
}
addItem('banana');
listItems();
// empty basket 
function empty() {
    basket = '';
}
empty();
console.log(`I have ${basket} in my basket`);
