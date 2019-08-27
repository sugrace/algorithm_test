function solution(n, arr1, arr2){
    let ret=[];
    for(let i=0; i<n; i++){
        ret[i]='';
        let result = arr1[i]|arr2[i];
        let exp;
        for(let j=n; j>0; j--){
            exp = expo(j);
            if(result >= exp){
                result -= exp;
                ret[i]+= '#';
            }else{
                ret[i]+=' ';
            }
        }
    }
    return ret;
}

function expo(n){
    let ret = 1;
    for(let i=1; i<n; i++){
        ret*=2;
    }
    return ret;
}


console.log(solution(5,[9,20,28,18,11], [30,1,21,17,28]));
console.log(solution(6,[46,33,33,22,31,50],[27,56,19,14,14,10]));