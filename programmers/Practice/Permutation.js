function permutation(list, depth, n){
    if(depth == 2){
        console.log(list);
        return;
    }

    for(let i=depth; i<n; i++){
        swap(list, i, depth);
        permutation(list, depth+1, n);
        swap(list, i, depth);
    }
}

function swap(list, i, j){
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

