function solution(p){
    let rightBracket = 0;
    let leftBracket = 0;
    let u='', v='';
    for(let i=0; i<p.length; i++){
        if(p[i] === '('){
            leftBracket++;
        }else if(p[i] === ')'){
            rightBracket++;
        }
        if(leftBracket === rightBracket){
            u = p.substring(0,i+1);
            v = p.substring(i+1);
            break;
        }
    }
   if(u[0] === ')'){
            u = u.substring(1,u.length-1);
            for(let i=0; i<u.length; i++){
                if(u[i]==='('){
                    u = u.substring(0,i)+')'+u.substring(i+1,u.length)
                }else if(u[i]===')'){
                    u = u.substring(0,i)+'('+u.substring(i+1,u.length)
                }
            }
       return '(' + solution(v) + ')' + u;
   }
   else if(u[0] === '('){
        return u + solution(v);
   }else{
       return ''
   }
}

console.log(solution(")()()()("));