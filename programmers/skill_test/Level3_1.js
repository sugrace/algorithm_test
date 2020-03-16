function solution(lines) {
    var answer = 1;
    var max = 0;
    let convertedLines = [];
    lines.map((line)=>{
        let format = line.substring(11,23);
        let seconds = format.split(":")[0] * 3600000 + format.split(":")[1] * 60000 + format.split(":")[2] * 1000;
        let startSeconds = seconds - Number(line.substring(24, line.length-1)*1000) + 1;
        let endSeconds = seconds;
        convertedLines.push(startSeconds);
        convertedLines.push(endSeconds);
    })
    console.log(lines)
    console.log(convertedLines)
    for(let i=0; i<convertedLines.length; i++){
        for(let j=i+1; j<convertedLines.length; j++){
            if(convertedLines[i]+999 >= convertedLines[j]){
                answer++;
            }else{
                break;
            }
        }
        if(max < answer){
            max = answer;
        }
        answer = 1;
    }
    return max;
}

console.log(solution([
        "2016-09-15 01:00:04.001 2.0s",
        "2016-09-15 01:00:07.000 2s"
        ]))