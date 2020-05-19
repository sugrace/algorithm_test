function main(n ,s) {
    let result = countingValleys(n, s);
    console.log(result);
    return;
}
function countingValleys(n, s){
    let seaLevel = 0;
    let count = 0;
    for(let step of s){
        if(seaLevel === -1 && step === 'U'){
            count++;
            seaLevel++;
        }else{
            if(step === 'U'){
                seaLevel++;
            }else{
                seaLevel--;
            }
        }
    }
    return count;
}
main(8, 'UDDDUDUU')

