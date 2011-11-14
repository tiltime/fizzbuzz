plan(5);
load('fizzbuzz.js');
    test('fizzbuzz()', function() {
        ok( fizzbuzz(3) == "fizz", " 3 divide by 3 and return fizz" );
        ok( fizzbuzz(-3) == "fizz", " -3 is Negative number, divide by 3 and return fizz" );
        ok( fizzbuzz(5) == "buzz", " 5 divide by 5 return buzz" );
        ok( fizzbuzz(15) == "fizz buzz", " 15 divide by 3 and 5 and return fizz buzz" );
        ok( fizzbuzz(1) == 1, "input number and return number");
    });
