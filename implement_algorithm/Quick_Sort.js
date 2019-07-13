
function swap(list, i, j){
    var temp = list[i];
    list[i]=list[j];
    list[j]=temp;
}
function partition(list, left, right){
    var pivot;
    var low, high;
    low = left+1; //피벗이 list 배열의 가장 왼쪽 요소 이므로 left+1 부터 비교할 것을 명시한다.
    high = right;
    pivot = list[left]; // 정렬할 리스트의 가장 왼쪽 데이터를 피벗으로 선택한다.
   //low 와 high가 교차 할때까지 반복한다.
    while(low<=high){
      //pivot 과같은 값은 배열의 왼쪽으로 몰아 넣는다 따라서 list[low] <= pivot 인경우에도 low의값을 증가시킨다.
      while (low<=right && list[low]<=pivot){
        low++; 
      }//pivot 과같은값은 pivot 보다 작은 값으로 치기때문에 pivot 과같은 값을 만나게된다면 high 의값은 변동없다.
      while (left<=high && list[high]>pivot) {
        high--;
      } 
      // 만약 low와 high가 교차하지 않았다면 교체한다.  
      if(low<high){
        swap(list, low, high);
      }
    }
    // 이상으로 pivot 을기준으로 배열의 왼쪽 부분은 작은쪽 오른쪽 부분은 큰쪽으로 Divide 된다.
    // pivot 으로 설정한 가장첫번째 배열요소 list[left] 와 list[high] 를 교환하게되면 list[high] 는 피벗이되고 high 는 피벗 인덱스가 된다.
      swap(list, left, high);
    // 피벗의 위치인 high를 반환
    return high;
  }
function Quick_Sort(list, left, right){
   //정렬할 리스트의 크기가 2개 이상이라면 아래의 알고리즘을 실행한다
    if(left<right){
      // partition 함수를 호출하여 피벗을 기준으로 분할후 pivot_index를 반환한다.
      var pivot_index = partition(list, left, right);
      //left 부터 pivot_index 전까지의 Quick_Sort 를 실행한다.
      Quick_Sort(list, left, pivot_index-1); 
      //pivot_index 부터 right 까지의 Quick_Sort 를 실행한다.
      Quick_Sort(list, pivot_index+1, right); 
    }
    return;
  }
  
  
var list = [5, 7,8,8,98,4,3,452234,357646,355,45,4454,3344,52,5,6,7,5, 7];
  Quick_Sort(list, 0, list.length-1);
  console.log(list);
  