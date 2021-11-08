const isUpperCase = (c) => c == c.toUpperCase() ? true : false;
const isLowerCase = (c) => c == c.toLowerCase() ? true : false;

const rot13 = (msg) => {
    msg = msg.split(''); 
    let answer = ''; 
    for(let i = 0; i<msg.length; i++){ 
        if(isLowerCase(msg[i]) && msg[i].charCodeAt(0) + 13 > 90) answer += String.fromCharCode(65+(90-(msg[i].charCodeAt(0))));
        if(isUpperCase(msg[i]) && msg[i].charCodeAt(0) + 13 > 122) answer += String.fromCharCode(97+(122-(msg[i].charCodeAt(0))));
        else{ 
            answer += String.fromCharCode(msg[i].charCodeAt(0) + 13); 
        } 
    } 
    return answer; 
}; 

console.log(rot13('abc'));
