function numOrFunc(num, func){ 
    if(func == undefined) return num; 
    return func(num); 
} 
 
function zero(func) { return numOrFunc(0, func);}
function one(func) { return numOrFunc(1,func);}
function two(func) { return numOrFunc(2,func);}
function three(func) { return numOrFunc(3,func);}
function four(func) { return numOrFunc(4,func);}
function five(func) { return numOrFunc(5,func);}
function six(func) { return numOrFunc(6,func);}
function seven(func) { return numOrFunc(7,func);}
function eight(func) { return numOrFunc(8,func);}
function nine(func) { return numOrFunc(9,func);}

function plus(right) {return function(left) { return left+right };}
function minus(right) {return function(left) { return left-right };}
function times(right) {return function(left) { return left*right };}
function dividedBy(right) {return function(left) { return Math.floor(left/right) };}
