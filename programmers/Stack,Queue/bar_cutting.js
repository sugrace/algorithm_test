function solution(arrangement) {
    var answer = 0;
    let stick = 0;

    while(arrangement.length > 0) {
        if(arrangement.substr(0, 2) == '()') {
            answer += stick;
            arrangement = arrangement.substr(2);
        }
        else if(arrangement[0] == '(') {
            stick++;
            arrangement = arrangement.substr(1);
        }
        else {
            answer++;
            stick--;
            arrangement = arrangement.substr(1);
        }
    }

    return answer;
}