const persistence = (num, count=0) => {
    num = num.toString(); 
    if(num.length == 1) return count;
    else {
        count++; 
        return persistence(eval(num.split('').join('*')), count);
    } 
} 

console.log(persistence(999));
