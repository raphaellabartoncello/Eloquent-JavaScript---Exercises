var counter = 0;
var result = 0;
while (counter < 100) {
    result = result + 1;
    counter += 1;
    if(result % 3 == 0 && result % 5 == 0){
        console.log("FizzBuzz");
    }
        if (result % 3 == 0) {
        console.log("Fizz");
    }
        if (result % 5 == 0) {
        console.log("Buzz");
    } 
        else(console.log(result));

}