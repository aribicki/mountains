/* 
    checkYear.js 
    filter motorcycle data and look for bikes older then 10 years
    Andrew Ribicki 3/17/2015
*/

load('moto.js');
var moto = JSON.parse(MOTO_FILE);
/* I have alot of questions about this which I will send you an email. After many many hours of errors
and checking stackoverflow, I am still a little confused. At first i had it set to JSON.parse() 
but I kept receiving and error about an unexspected token 0 [object, Object]. 
SyntaxError: Unexpected token o
    at Object.parse (native)
    at checkYear.js:8:17

*/






function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
   if (test(array[i]))
    passed.push(array[i]);
    }
    return passed;
    }
    
    
    
    //86400000 = 1 day
    
    print(JSON.stringify(filter(moto, function(item) {
      return (((new Date(item.year)).getTime()) + (item.rebuild * 86400000) < (new Date().getTime())) ;
      })));
