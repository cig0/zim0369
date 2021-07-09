const findOdd = (A) => {
    A.sort((a,b) => a - b);
    console.log(A); 
    let count = 1; 
    for(let i = 1; i<A.length; i++){ 
        if(i == A.length-1) return A[i]; 
        if(A[i] == A[i-1]) count++;
        else {
            if(count%2!=0) return A[i-1];
            count = 1; 
        } 
    } 
};
     
/*          
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
*/     
     
     
     
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
