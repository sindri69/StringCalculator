//StringCalculator.js
 
var StringCalculator = {
    Add : function(numbers) {
        if (numbers == "") {
        return 0;
      }
    else {
 
      var arrNumber = numbers.split(",");
      if (numbers.length == 1) {
        return parseInt(numbers);
      }
      return parseInt(arrNumber[0]) + parseInt(arrNumber[1]);
    }
    }
};
 
module.exports = StringCalculator;

