

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let max = -63;
    for(let i=0; i<4; i++){
       for(let j=0; j<4; j++){
           let one = arr[i][j] + arr[i][j+1] + arr[i][j+2];
           let two = arr[i+1][j+1];
           let three =  arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
           let sum = one+two+three;
           if(max <= sum){
               max = sum;
           }
       }
    }
    return max;
}

function main(arr) {
    let result = hourglassSum(arr);
    console.log(result);
    return result;
}

main([[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])
