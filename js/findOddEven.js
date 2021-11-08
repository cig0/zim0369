function findOutlier(s){
    let eve = 0;
    if(s[0]%2==0) eve++;
    if(s[1]%2==0) eve++;
    if(s[2]%2==0) eve++;
    if(eve>1) {
        for(let i = 0; i<s.length; i++) {
            if(s[i]%2!=0) return s[i]; }
    }
    else {
        for(let i = 0; i<s.length; i++) {
            if(s[i]%2==0) return s[i]; }
    }
};

console.log(findOutlier([2,6,8,10,3]));
