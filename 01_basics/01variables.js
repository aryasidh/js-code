const accountId = 144553  //never changer(means locked)
let accountEmail = "hitesh@google.com"  // let and var same 
var accountPassword = "254412"  //not recomended to use due to scope
accountCity = "jaipur" //bilkul achha nhi hai but variables aise bhi declared ho skta hai 
let accountStatus;  //js me variables ko bs declared krke chhor denege mtlb define nhi krenge to undefined print hogi

// accountId = 2  //not allowed

accountEmail = "hc@gmail.com"
accountPassword = "21545451"
accountCity = "motihari"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus]);

/*
NOTE:-
"const" variables never change(means locked)
"let" and "var" same, "let" recomended to use
without using any keyword we can declared a variables, (but not recomended)
js me variables ko bs declared krke chhor denege mtlb define nhi krenge to undefined print hogi
*/

