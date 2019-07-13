function solution(clothes) {
    var answer = 1;
    const map = new Map();
   clothes.forEach(item => {
        if(map.get(item[1])==undefined){
            map.set(item[1],[item[0]]);
        }
        else{
            map.get(item[1]).push(item[0]);
        }
   })
   for(let [key,value] of map){
     answer*=(value.length+1)
   }
    return answer-1;
}