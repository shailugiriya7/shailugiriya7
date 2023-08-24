
// imediatly invoked function expression
(function one(){
    console.log("shailu");
})();  // Output: "shailu"

((two) => {
    console.log(`babu gobar, ${two}`);
})('babu');  // Output: "babu gobar, babu"
