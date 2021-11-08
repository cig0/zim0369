const isPrime = (num) => {
    if(num < 2) return false; 
    if(num == 2 || num == 3 || num == 5 || num == 7) return true; 
    for(i = 2; i<=Math.floor(num/2); i++){ 
        if(num%i == 0) return false; 
    } 
    return true; 
}; 
