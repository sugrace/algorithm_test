function ArrayJumping(arr) { 
    //BFS 를 활용 하여 풀이
    let queue = [];
    let startValue = Math.max(...arr);
    let currentIndex = arr.indexOf(startValue);
    let result;
    queue.push({
      index : currentIndex,
      value : arr[currentIndex],
      count : 0,
    })
    while(1){
      let cur = queue.shift();
      if(cur.count != 0 && cur.value == startValue){
        result = cur.count;
        break;
      }
      let leftIndex = cur.index - cur.value > 0 ? cur.index - cur.value : cur.index - cur.value + arr.length;
      let leftValue = arr[leftIndex];
      let rightIndex = cur.index + cur.value < arr.length-1 ? cur.index + cur.value : cur.value + cur.index - arr.length;
      let rightValue = arr[rightIndex];
      let left = {
        index : leftIndex,
        value : leftValue,
        count : cur.count+1
      }
      let right = {
        index : rightIndex,
        value : rightValue,
        count : cur.count+1
      }
      queue.push(left);
      queue.push(right);
    }

    return result;
  }
     
  console.log(ArrayJumping([1,2,3,4,2]))
  console.log(ArrayJumping([1,7,1,1,1,1]))

