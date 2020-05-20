function jumpingOnClouds(n, c) {
 let current = 0;
 let count = 0;
    while(current < n-1){
        if(current+2 <= n-1 && c[current+2] == 0 ){
            current +=2;
            count++;
        }else{
            if(current+1 <= n-1 && c[current+1] == 0){
                current +=1;
                count++;
            }
        }
    }
    return count;

}

function main(n, c) {
    let result = jumpingOnClouds(n, c);
    console.log(result);
    return result;
}
