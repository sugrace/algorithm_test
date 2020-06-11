function Palindrome(str) { 
    str = str.replace(/ /g,"")
    let left = '';
    let right = '';
    if(str.length % 2 == 0){
        left = str.slice(0, str.length/2)
        right = str.slice(str.length/2)
    }else{
        left = str.slice(0, str.length/2)
        right = str.slice(str.length/2 + 1)
    }
    if(left == right.split("").reverse().join("")){
        return true;
    }else{
        return false;
    }
  }

Palindrome("never odd or even");
Palindrome("eye");
