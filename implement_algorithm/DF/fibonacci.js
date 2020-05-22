function fibonacchi(n){
    if(n==0) return 1;
    if(n==1) return 1;
    return fibonacchi(n-1) + fibonacchi(n-2);
}
// 이미 방문한 값을 저장해 두었다가 다시 활용하여 연산의 횟수를 줄인다. 
// (memoiation) (Dynamic programming)
let memoization = [];
function fibonacchi_Momoization(n){
    if(!memoization[n]){
        if(n==0 || n==1){
            memoization[n] = 1;
        }else{
            memoization[n] = fibonacchi_Momoization(n-1) + fibonacchi_Momoization(n-2);
        }
    }
   
    return memoization[n];
}

console.log(fibonacchi(3));
console.log(fibonacchi_Momoization(3));


