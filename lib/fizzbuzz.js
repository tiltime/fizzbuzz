/** fizz buzz function **/
function fizzbuzz(number){
    var result;
    if (number % 3 == 0 && number % 5 == 0){
        result = "fizz buzz";
    }
    else if (number % 3 ==0){
        result = "fizz";
    }
    else if (number % 5 == 0){
        result = "buzz";
    }
    else result = number;
    return result;
}