function solution(dartResult){
    let answer = [];
    let nextIndex=0;
    let ret = 0;
    let length = dartResult.length;
    for(let i=0; i<length; i++){
        let number = '';
        if(dartResult[i]=='S' || dartResult[i]=='D' || dartResult[i] =='T'){
            for(let j=nextIndex; j<i; j++){
                number+=dartResult[j];
            }
            number = Number(number);
        if(dartResult[i]=='S'){
            answer.push(number);
        }else if(dartResult[i]=='D'){
            answer.push(number*number);
        }else {
        answer.push(number*number*number);
        }
        nextIndex=i+1;

            if(dartResult[nextIndex]=='*'){
                if(answer.length-1 >= 0){
                    answer[answer.length-1]*=2;
                }
                if(answer.length-2 >=0){
                    answer[answer.length-2]*=2;
                }
                nextIndex++;
            }else if(dartResult[nextIndex]=='#'){
                answer[answer.length-1]*=(-1);
                nextIndex++;
            }
        }
        
    }

    answer.forEach((value)=>{
        ret+=value;
    })
    console.log(ret,answer);
    return ret;
}




solution('1S2D*3T');
solution('1D2S#10S');
solution('1D2S0T');
solution('1S*2T*3S');
solution('1D#2S*3S');
solution('1T2D3D#');
solution('1D2S3T*');





