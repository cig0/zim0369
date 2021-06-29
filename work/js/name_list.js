const list = (names) => {  
if(names.length < 1) return '';
let output = '';
let answer = '';
for(let a of names.slice(0,names.length-1)) output += Object.values(a) + ', ';
answer = output.replace(/(^\s*,)|(,\s*$)/g, '') + ' & ' + Object.values(names[names.length-1]);
if(names.length == 1) return answer.slice(3,);
return answer; 
}; 

// Used regex that I didn't even know
