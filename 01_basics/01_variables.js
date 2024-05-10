const accountId = 144554
let accountEmail = "abhishek@google.com"
var accountPassword = "12345"
 let accountCity = "vns"
let accountState;

// accountId = 2 // not allowed


accountEmail = "abhi@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])