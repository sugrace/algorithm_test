function solution(arr, divisor) {
    console.log(arr.sort());
    let answer = arr.sort((a,b)=> a-b).filter((e)=> e % divisor === 0);
    return answer.length ? answer : [-1];
}

solution([3,2,1,6])