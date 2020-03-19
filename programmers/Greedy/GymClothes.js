function solution(n, lost, reserve) {
    let originReserve = reserve.filter((e)=>{return lost.indexOf(e) === -1  })
    let originLost = lost.filter((e)=>{return reserve.indexOf(e) === -1  })
    let originLength = originLost.length;
    originLost = originLost.filter((e)=>{
        if(originReserve.indexOf(e-1) !== -1){
            originReserve.splice(originReserve.indexOf(e-1),1)
            console.log(e-1)
            return true;
        }else if(originReserve.indexOf(e+1) !== -1){
            originReserve.splice(originReserve.indexOf(e+1),1)
            console.log(e+1)
            return true;
        }
    })
    return n - (originLength - originLost.length);
}