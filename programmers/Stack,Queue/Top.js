function solution(heights) {
    var answer = [];
    var received_top = 0;
    for(let i=0; i<heights.length; i++){
        received_top = 0;
        for(let j=0; j<i;j++){
            if(heights[j]>heights[i]){
                    received_top = j+1;
            }
        }
        answer.push(received_top);
    }
    return answer;
}


solution([6,9,5,7,4]);