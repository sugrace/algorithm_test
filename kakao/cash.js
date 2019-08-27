function solution(cashSize, cities){
    let cash = [];
    let answer = 0;
    let processed = false;
    if(cashSize>0){
        cities.forEach((city)=>{

            cash.forEach((element)=>{
                if(element.city.toUpperCase() == city.toUpperCase()){
                    element.time = 0; 
                    processed = true;
                    answer++;
                }
            })
    
            if(cash.length < cashSize && !processed){
                cash.push({city,time : 0})
                answer+=5;
            }else if(cash.length == cashSize && !processed){
                cash[0] = {city,time:0};
                answer+=5;
            }
            cash.forEach((element)=>{
                element.time++;
            })
            cash.sort(function(a,b){
                return b.time - a.time;
            })
            processed = false;
        })
    }else {
        answer = cities.length * 5;
    }
    console.log(answer)

    return answer;
}


solution(3,[`Jeju`, `Pangyo`, `Seoul`, `NewYork`, `LA`, `Jeju`, `Pangyo`, `Seoul`, `NewYork`, `LA`]);
solution(3,[`Jeju` ,`Pangyo`, `Seoul`, `Jeju`, `Pangyo`, `Seoul`, `Jeju`, `Pangyo`, `Seoul`]);
solution(2,[`Jeju`, `Pangyo`, `Seoul`, `NewYork`, `LA`, `SanFrancisco`, `Seoul`, `Rome`, `Paris`, `Jeju`, `NewYork`, `Rome`]);
solution(5,[`Jeju`, `Pangyo`, `Seoul`, `NewYork`, `LA`, `SanFrancisco`, `Seoul`, `Rome`, `Paris`, `Jeju`, `NewYork`, `Rome`]);
solution(2,[`Jeju`, `Pangyo`, `NewYork`, `newyork`]);
solution(0,[`Jeju`, `Pangyo`, `Seoul`, `NewYork`, `LA`]);

