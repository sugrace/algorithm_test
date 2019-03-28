function solution(priorities, location) {
    var answer = 0;
    var max ;
    priorities=priorities.map(priority => {
            return {priority, request:false}
            }
        );
    priorities[location].request=true;
    
    
    while(priorities.length > 0){
        max = false;
        for(var i=1;i<priorities.length;i++){
            if(priorities[0].priority < priorities[i].priority){
                priorities.push(priorities.shift());
                max = true;
                break;
            }
        }
       if(max==false){
            answer++;
            if(priorities.shift().request==true){
                break;
            }
       }
    }
    return answer;
}