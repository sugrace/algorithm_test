
const source = [1,2,5]; 
const final = []; 

function combination(source, target, n, r, count) 
{ 
    if(r === 0)
        final.push(target); 
    else if(n === 0 || n < r) 
        return; 
    else { 
        target.push(source[count]); 
        combination(source, Object.assign([], target), n - 1, r - 1, count + 1); 
        target.pop(); 
        combination(source, Object.assign([], target), n - 1, r, count + 1); 
    } 
} 

function check(array, n){
    let count = 1;
    let result = 0;
    
    for(let i = 0; i < array.length; i++){
        console.log(array[i], "result", result ,"count", count)
        for(let j = 0; j < array[i].length; j++){
            console.log(array[i][j], n % array[i][j] === 0 )
            if(n % array[i][j] === 0 ){
                if(array[i].length === count){
                    result++;
                    console.log('result++',result)

                    break;
                }else if(array[i].length > count){
                    break;
                }
            }else{
                count++;
                console.log('count++',count)

            }
        }
        count = 1;
    }
    console.log(result)
    return result;
}
source.sort(function(a,b){
    return b-a;
})
console.log(source)
combination(source, [], 3, 1, 0); 
combination(source, [], 3, 2, 0); 
combination(source, [], 3, 3, 0); 
console.log('final', final);
check(final, 5)