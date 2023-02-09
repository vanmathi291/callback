console.log("one");
setTimeout(function cbt(){
    console.log("CB setTimeout");
},4000);
fetch("https://restcountries.com/v3.1/all")
.then(function cbF(){
    console.log("CB restcountries");
});
console.log("two");