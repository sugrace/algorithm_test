function solution(x, n) {
    var answer = [];
    var number = x;
    for(let i =0;i<n;i++){
        answer.push(x)
        x +=number;
    }
    return answer;
}
solution(2,5);