function solution(jobs) {
    var answer = {max: 500000000};
    permutation(jobs, 1, jobs.length, answer)
    return answer.max;
}


function permutation(list, depth, n, answer){
    if(depth == n-1){
        let result = check(list)
        if(answer.max > result ){
            answer.max = result;
        }
        return;
    }

    for(let i=depth; i<n; i++){
        swap(list, i, depth);
        permutation(list, depth+1, n, answer);
        swap(list, i, depth);
    }
}

function swap(list, i, j){
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}
function check(list){
    let sum = 0;
    let result = 0;
    let runningTime = 0;
    let firstStart = list[0][0];
    let firstProcess = list[0][1];
    sum = firstStart + firstProcess;
    result += sum;
    runningTime = firstProcess;
    for(let i=1; i<list.length; i++){
        sum = (runningTime - list[i][0] + list[i][1]);
        result += sum;
        runningTime += list[i][1];
    }

    return parseInt(result/3);
}
solution([[0, 3], [1, 9], [2, 6]]);
solution([[0,2], [1,6], [3,12]]);

