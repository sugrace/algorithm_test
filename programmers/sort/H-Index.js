function solution(citations) {
    citations = citations.sort((a, b)=>{
        return b - a;
    });
    let cnt = 0;
    while(cnt + 1 <= citations[cnt]){
        cnt++;
    }
    return cnt;
}


solution([3, 0, 6, 1, 5, 7, 8]);