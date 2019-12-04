/* Solution */
function getValidPWsInRange(start, end){
    let c = 0;
    for (n = start; n <= end; n++){
        if (isValid(n)){ c++; }
    }
    return c;
}

function isValid(n){
    let adjacent = false;
    const a = (n+'').split('').map(m=>parseInt(m));
    if (a.length != 6){ return false; }
    for (const [i,int] of a.entries()){
        if (a[i] < a[i-1]){ return false; }
        if (!adjacent && a[i] === a[i-1]){ adjacent = true; }
    }
    return adjacent;
}

/* Input */
console.log( getValidPWsInRange(284639,748759) );
