 function lifeInWeeks(age) {
     
         var remainingYears = (100 - age);
         var remainingMonths = (remainingYears * 12);
         var remainingWeeks = (remainingYears * 52);
         var remainingDays = (remainingYears * 365);
     
     var message = "You have " + remainingDays + "days, " + remainingWeeks + ", weeks and " + remainingMonths + " months left in this world!";
     
     alert(message);
 }
lifeInWeeks(19);
