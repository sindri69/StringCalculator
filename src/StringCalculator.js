//StringCalculator.js
 
var StringCalculator = {
    Add : function(numbers) {
        if (numbers == "") {
        return 0;
      }
    else {
      var negativeNumbers = [];
      var arrNumber = numbers.split(/,|\n/g);
 
      var negativeExists = false;
      var j = 0;
 
      for(i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] < 0) {
          negativeNumbers[j] = arrNumber[i];
          j++;
          negativeExists = true;
        }
      }
 
 
      negativeList = "";
      if (negativeExists) {
        for(i = 0; i < negativeNumbers.length - 1; i++) {
          negativeList += negativeNumbers[i] + ",";
        }
        negativeList += negativeNumbers[negativeNumbers.length - 1];
      }
 
 
      if (negativeExists == true) {
        return "Negatives not allowed: " + negativeList;
      }
 
	if (numbers.startsWith("//")) 
	{
		var delimiter = numbers.charAt(2);
		var skip = numbers.substring(4);
		var arrNumber = skip.split(delimiter);
		var sum = 0;
		for (i = 0; i < arrNumber.length; i++) {
			sum += parseInt(arrNumber[i]);
		}
	return sum;
	}

      var sum = 0;
      for(i = 0; i < arrNumber.length; i++) {
	if (parseInt(arrNumber[i]) <= 1000) {
		sum += parseInt(arrNumber[i]);
	
      	}
	}
      return sum;
    }
    }
};
 
module.exports = StringCalculator;
 
module.exports = StringCalculator;
