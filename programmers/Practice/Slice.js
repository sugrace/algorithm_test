//slice 는 shallow copy
//slice 한다면 새로운 배열을 하나 만들고 그안에 array 의 요소들을 복사 한다.
// 5, 6 은 숫자기 때문에 숫자 자체로 복사가 되고, {name: 'a'} 의 형태의 객체는 주소값이 복사가 된다. 


//따라서, shallow[2]='x' 를하게되면 shallow 배열과 array 배열은 다른 형태가 되고.
// shallow[2].name = 'x' 를 한다면 shallow 배열과 array 배열은 같은 형태를 띈다.


let array = [5, 6, { name: 'a' }, { name: 'b' }, { name: 'c' }];
let shallow = Array.prototype.slice.call(array);

shallow[2] = "x"
// shallow[2].name = "x"

console.log(array);
console.log(shallow);
