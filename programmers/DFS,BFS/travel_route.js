function solution(tickets) {
    var result ={answer:[]};
    let path = 'ICN';
    Search(tickets ,tickets.length, result, path);
    result.answer.sort();
    return result.answer[0].split(' ');
}
function Search(tickets, depth, result, path){
let dest = path.substring(path.length-3);
    if(depth==0){
        result.answer.push(path);
        return;
    }
    for(let i=0; i<tickets.length; i++){
        if(tickets[i][0] === dest){
            let _tickets = JSON.parse(JSON.stringify(tickets));   //deep copy
            let _path = path+' '+(_tickets[i][1]);
            _tickets.splice(i,1);
            Search(_tickets, depth-1, result, _path);
        }
    }
}
solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']]);
solution([['ICN', 'COO'], ['ICN', 'BOO'], ['COO', 'ICN']]);
