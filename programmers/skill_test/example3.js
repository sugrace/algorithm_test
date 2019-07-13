function solution(n) {
    var count =0 ;
    count = count_bit(n);
    while(1){
        n=n+1;
        if(count == count_bit(n)){
            return n;
        }
    }

}
function count_bit(number){
    var bit_cnt=0;
    while(number){
        bit_cnt += (number & 1);
        number = number >> 1;
    }
    return bit_cnt;
}

solution(78);