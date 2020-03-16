let result = [];

function solution(n) {
    let i=0;
    while(i<n){
        plus(0);
        i++;
    }
    return result.reverse().join('');
}
function plus(current){
    if(!result[current]){
        result[current] = 1;
    }
    else{
        if(result[current] === 4){
            result[current] = 1;
            plus(current+1);
        }else{
            result[current] *= 2;
        }
    }
}
solution(25)