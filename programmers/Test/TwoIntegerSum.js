function solution(a, b) {
    let answer = 0;
    if(a === b) return a;
    else{
        let start,end;
        if(a>b){
            start = b;
            end = a;
        }else{
            start = a;
            end = b;
        }
        while(start <= end){
            answer+=start;
            start++
        }
    }
    return answer;
}