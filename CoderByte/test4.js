let min = 999999;

function MatrixChains(arr) { 
    // code goes here  
    calculate(arr, 0);
    return min; 
  }

function calculate(arr, memo){
    for(let i=0; i<=arr.length-3; i++){
        let temp = arr.slice(i,i+3)
        let tempArr = arr.slice(0,i+1).concat(arr.slice(i+2));
        let sum = 1;
        temp.forEach(element => {
            sum *= element;
        });
        memo += sum;
        // console.log(tempArr, temp, memo)
        if(tempArr.length >= 3){
            // console.log("recursive", tempArr, memo)
            calculate(tempArr, memo)
        }else{
            if(memo < min){
                min = memo;
            }
        }
    }
}

MatrixChains([1, 4, 5, 6, 8])
MatrixChains([2,3,4])