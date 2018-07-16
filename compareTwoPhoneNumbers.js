(function() {
    "use strict";

    /*
     * Check digits match in two strings that look like phone numbers with regex
     * @param phoneNum1 phone number string1
     * @param phoneNum2 phone number string2
     * @return true if digits in both phone numbers match, including no digits in both strings; false otherwise
     * @throw exception when argument is null or undefined or not of type string (just for demonstration purpose)
     */
    var compareTwoPhoneNumbersWithRegex = function(phoneNum1, phoneNum2) {
        validateInput(phoneNum1, phoneNum2);
        // if two strings are strictly equal
        if (phoneNum1 === phoneNum2) {
            return true;
        }
        // remove all the nondigits in the string
        var phoneNum1Cpy = phoneNum1.replace(/\D/g, "");
        var phoneNum2Cpy = phoneNum2.replace(/\D/g, "");
        // compare the rest
        return phoneNum1Cpy === phoneNum2Cpy;
    }

    /*
     * Check digits match in two strings that look like phone numbers
     * @param phoneNum1 phone number string1
     * @param phoneNum2 phone number string2
     * @return true if digits in both phone number strings match, including no digits in both strings; false otherwise
     * @throw exception when argument is null or undefined or not of type string (just for demonstration purpose)
     */
    var compareTwoPhoneNumbers = function(phoneNum1, phoneNum2) {
        validateInput(phoneNum1, phoneNum2);
        // if two strings are strictly equal
        if (phoneNum1 === phoneNum2) {
            return true;
        }
        var i = 0;
        var j = 0;
        var phoneNum1Len = phoneNum1.length;
        var phoneNum2Len = phoneNum2.length;
        while (i <= phoneNum1Len && j <= phoneNum2Len) {
            var curCharPhoneNum1 = phoneNum1.charAt(i);
            var curCharPhoneNum2 = phoneNum2.charAt(j);
            // check if current char is a digit
            if (i < phoneNum1Len && isNaN(parseInt(curCharPhoneNum1))) {
                i++;
                continue;
            }
            if (j < phoneNum2Len && isNaN(parseInt(curCharPhoneNum2))) {
                j++;
                continue;
            }
            // the part [0-min(len1, len2)]  matches, the longer string has extra digits in the remaining part
            if ((i === phoneNum1Len && j < phoneNum2Len)
                || (i < phoneNum1Len && j === phoneNum2Len) 
                || curCharPhoneNum1 !== curCharPhoneNum2) { // different character
                return false;
            } else {
                i++;
                j++;
            }
        }
        return true;
    }

    function isString(param) {
        return (typeof param === "string" || param instanceof String);
    }

    function validateInput(phoneNum1, phoneNum2) {
        // check null or undefined
        if (phoneNum1 == null || phoneNum2 == null) {
            throw new Error("Illegal Argument. Phone number is null or undefined.");
        }
        // check if the input type is string
        if (!isString(phoneNum1) || !isString(phoneNum2)) {
            throw new Error("Illegal Input. Input contains nonstring value.");
        }
    }

    module.exports.compareTwoPhoneNumbers = compareTwoPhoneNumbers;
    module.exports.compareTwoPhoneNumbersWithRegex = compareTwoPhoneNumbersWithRegex;
}());