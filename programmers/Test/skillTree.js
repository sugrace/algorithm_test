function solution(skill, skill_trees) {
    var answer = 0;
    for(let i=0; i<skill_trees.length; i++){
        for(let j=0; j<skill_trees[i].length; j++){
            if(skill.indexOf(skill_trees[i][j])<0){
                skill_trees[i] = skill_trees[i].replace(skill_trees[i][j], ' ');
            }

         }
         if(skill.indexOf(skill_trees[i].replace(/ /g,'')) === 0){
             answer++;
         }
    }
    return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);