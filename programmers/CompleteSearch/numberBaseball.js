

function solution(baseball) {
    var answer = 0;
    for(let i=0; i<baseball.length; i++){
        let number = basbaall[i][0];
        let strike = baseball[i][1];
        let ball = baseball[i][2];
        let candidate = [];
        switch (strike) {
            case 0:
                switch (ball) {
                    case 1:
                        
                    case 2:
                }
                break;
            case 1:
                switch (ball) {
                    case 0:
                    case 1:
                    case 2:
                }
                break;
            case 2:
                switch (ball) {
                    case 0:
                    case 1:
                    case 2:
                }
                break;
        }
    }



    return answer;
}



solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])
