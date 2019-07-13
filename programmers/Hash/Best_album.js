function solution(genres, plays) {
    var answer = [];
    const result = [];
    const map = new Map();
    for(let i=0; i<genres.length;i++){
        if(map.get(genres[i])===undefined){
            map.set(genres[i],{
                genre:genres[i],
                plays:plays[i],
                players:[{play:plays[i],
                        unique_number:i,
                        }]}
                        );
        }else{
            map.get(genres[i]).plays+=plays[i];
            map.get(genres[i]).players.push({play:plays[i],unique_number:i});

        }
    }
    for(let value of map.values()){
        result.push(value);
    }
   result.sort(function(a,b){
        
    return b.plays-a.plays;
   
    });
    result.map(item=>{
        item.players.sort(function(a,b){
            return b.play-a.play;
        })
    })

    for(let i=0; i<result.length; i++){
        let length;
        if(result[i].players.length < 2){
            length=result[i].players.length
        }else{
            length =2 ;
        }
        for(let j =0; j<length; j++){
            answer.push(result[i].players[j].unique_number);
        }
    }
    return answer;
}

solution(['classic', 'pop', 'classic', 'classic', 'pop'],[500, 600, 150, 800, 2500]);