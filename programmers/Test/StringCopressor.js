function solution(s) {
    let maxDiv = parseInt(s.length / 2);
    let min = s.length;
    for(let i=1; i<=maxDiv; i++){
        let count = 1;
        let temp = '';
        let string = s.substring(0,i)
        for(let j=i; j < s.length; j+=i){
            let slice = s.substring(j,i+j);
            if(string !== slice){
                temp += count > 1 ? count + string : string;
                string = slice;
                count = 1;
            }else{
                count++;
            }
        }
        if(string){
            temp += count > 1 ? count + string : string;
        }
      
        if(min >= temp.length){
            min = temp.length; 
        }
      
    }
    return min;
}

solution("aabbaccc")