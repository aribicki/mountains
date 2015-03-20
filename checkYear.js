/* 
    checkYear.js 
    filter motorcycle data and look for bikes older then 10 years
    Andrew Ribicki 3/17/2015
*/

load('moto.js');
var moto = JSON(MOTO_FILE);







function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
   if (test(array[i]))
    passed.push(array[i]);
    }
    return passed;
    }
    
    
    
    
    
    print(JSON.stringify(filter(moto, function(item) {
      return (((new Date(item.year)).getTime()) + (item.rebuild * 86400000) < (new Date().getTime())) ;
      })));
