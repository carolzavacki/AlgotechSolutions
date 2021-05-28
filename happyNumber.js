var isHappy = function(n) {
    const numbersSoFar = [];
   if(n < 1) {
       return false;
   }
   if(n === 1){
       return true
   } 
   while(n!== 1){
       let currentNumber = 0;
       while(n>0) {
           currentNumber += (n %10) * (n%10);
           n = Math.floor(n/10);
       
   }
       if(!numbersSoFar.includes(currentNumber)){
           numbersSoFar.push(currentNumber);
           n = currentNumber;
       } else {
           return false;
       }
   }
   return true;
}

//console.log(happyNumber(19));