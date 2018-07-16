(function() {
    "use strict";
    const exercise = require('./compareTwoPhoneNumbers');

    test('null', () => {
        expect(() => 
          {exercise.compareTwoPhoneNumbers(null, '123')}).toThrow("Illegal Argument. Phone number is null or undefined.");
    });

    test('undefined', () => {
        expect(() => 
          {exercise.compareTwoPhoneNumbers('123', undefined)}).toThrow("Illegal Argument. Phone number is null or undefined.");
    });

    test('other than string: boolean', () => {
        expect(() => 
          {exercise.compareTwoPhoneNumbers(true, '123')}).toThrow("Illegal Input. Input contains nonstring value.");
    });

    test('other than string: object', () => {
        expect(() => 
          {exercise.compareTwoPhoneNumbers('123', {})}).toThrow("Illegal Input. Input contains nonstring value.");
    });

    test('other than string: array', () => {
        expect(() => 
        {exercise.compareTwoPhoneNumbers('123', [])}).toThrow("Illegal Input. Input contains nonstring value.");
    });

    var methods = [exercise.compareTwoPhoneNumbers, exercise.compareTwoPhoneNumbersWithRegex];

    for (var i = 0; i < methods.length; i++) {
        testCompareTwoPhoneNumbers(methods[i]);
    }

    function testCompareTwoPhoneNumbers(testFunction) {
        test('empty string', () => {
            expect(testFunction('', '')).toBe(true);
        });
        
        test('whitespace', () => {
            expect(testFunction(' ', '    ')).toBe(true);
        });
        
        test('same string', () => {
            expect(testFunction('123456789', '123456789')).toBe(true);
        });
        
        test('different string same length', () => {
            expect(testFunction('123456789', '123456780')).toBe(false);
        });
        
        test('different string different length', () => {
            expect(testFunction('123456789', '123')).toBe(false);
        });
        
        test('same digits with nondigit char', () => {
            expect(testFunction('12-4-6-89', '12-4-6-89')).toBe(true);
        });
        
        test('same digits with nondigit char different order', () => {
            expect(testFunction('-12-4-6-89', '1-24689---')).toBe(true);
        });
        
        test('same digits first with tailing part equal', () => {
            expect(testFunction('12-4-6', '12-4-6---')).toBe(true);
        });
        
        test('same digits first with tailing part not equal', () => {
            expect(testFunction('12-4-6', '12-4-6--1')).toBe(false);
        });
        
        test('no digits', () => {
            expect(testFunction('-----', '-------------------------')).toBe(true);
        });
        
        test('String object', () => {
            expect(testFunction(new String('123'), '123')).toBe(true);
        });
        
        test('requirement', () => {
            expect(testFunction("(123) 456-7890", "123.456.7890")).toBe(true);
        });

        test('requirement', () => {
            expect(testFunction("1-123-456-7890", "123-456-7890")).toBe(false);
        });
    }
})();


