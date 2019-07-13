function solution(s) {
    var answer = '';
    
    if(s.length % 2 == 0){
            answer = s.substring((s.length/2)-1, (s.length/2)+1);
    }else{
        console.log(Math.round(s.length/2))
        answer = s[Math.round(s.length/2)]
    }
    return answer;
}


solution("abdef");