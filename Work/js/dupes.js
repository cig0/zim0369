const duplicateCount = (text) => {
    let textArr = text.toLowerCase().split(''); 
    let copyArr = []; 
    const dupes = new Set();
    for(let i = 0; i<text.length; i++){ 
        if(!copyArr.includes(textArr[i])) copyArr.push(textArr[i]); 
        else dupes.add(textArr[i]);
    } 
    return(dupes.size);
}; 
