function solution(clothes) {
    var collections = [];
    var count =1;
    var num = 0;
    clothes.forEach((item)=>{
        if(!collections[item[1]]){
            collections[item[1]]=[];
             collections[item[1]].push(item[0]);
        }else{
            collections[item[1]].push(item[0]);
        }
    })


    
    Object.keys(collections).forEach(collection=>{
        count *= (collections[collection].length+1);
    })
    console.log(count-1)
    return count-1;
}

solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]);