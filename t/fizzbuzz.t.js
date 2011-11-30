plan(5);
load('lib/fizzbuzz.js');
    test('fizzbuzz()', function() {
        ok( fizzbuzz(3) == "3", " 3 divide by 3 and return fizz" );
        ok( fizzbuzz(-3) == "buzz", " -3 is Negative number, divide by 3 and return fizz" );
    });
