//var 변수형은 function-scope 이다. 함수 범위에 변수 할당이 되며 선언과 할당(undefined)가 동시에 이루어 진다. 같은 함수 범위에 변수가 없으면 socpe chain 을 통해서 closure 를 벗어나서 변수를 찾는다. 변수를 찾는데 실패하면 에러를 낸다.

//let 변수형은 block-scope 이다. block 범위에 변수 할당이 된다.
// block 단위에서 이루어지며 함수의 선언은 block 단위의 가장 위에서 이루어지지만 초기화는 ``` let a = 5 ``` 라고 쓰여잇는 위치에서 선언이 되므로 초기화 이전(TDZ) 에 참조 하면 오류를 나타낸다. 

var a = 3;
function solution(){
 console.log(a);
 {
    var a = 5;
 }
 console.log(a)
}

solution();