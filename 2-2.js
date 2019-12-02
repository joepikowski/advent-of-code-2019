/* Solution */
function findSolution(nMax, vMax, value, program){
    let a = program.split(',');
    a = a.map(e => parseInt(e));
    let aCopy;
    for (let v = 0; v <= vMax; v++){
        for (let n= 0; n <= nMax; n++){
            aCopy = a.slice();
            aCopy[1] = n;
            aCopy[2] = v;
            const result = process(aCopy);
            if (result[0] === value){
                return [n, v];
            }
        }
    }
    return false;
}

function process(a){
    let c;
    let i = 0;
    let end = false;

    while (i <= a.length - 1){
        c = a.slice(i,i+=4);
        switch(c[0]){
            case 1:
                a[c[3]] = a[c[1]] + a[c[2]];
                break;
            case 2:
                a[c[3]] = a[c[1]] * a[c[2]];
                break;
            case 99:
                end = true;
                break;
            default:
                throw new Error(`[${c[0]}] Unexpected Error`);
                break;
        }
        if (end){ break; }
    }
    return a;
}

/* Input */
const program = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,6,27,1,9,27,31,1,31,10,35,2,13,35,39,1,39,10,43,1,43,9,47,1,47,13,51,1,51,13,55,2,55,6,59,1,59,5,63,2,10,63,67,1,67,9,71,1,71,13,75,1,6,75,79,1,10,79,83,2,9,83,87,1,87,5,91,2,91,9,95,1,6,95,99,1,99,5,103,2,103,10,107,1,107,6,111,2,9,111,115,2,9,115,119,2,13,119,123,1,123,9,127,1,5,127,131,1,131,2,135,1,135,6,0,99,2,0,14,0';
console.log( findSolution(99, 99, 19690720, program) );
