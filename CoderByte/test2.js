function StringPeriods(str) { 
let sameWord = true;
let logestSubstring = '';
if(str.length == 1){
    return -1;
}
for(let i=0; i<str.length; i++){
    if(str[i] !== str[0]){
        sameWord = false;
    }
}
if(sameWord){
    return str[0];
}
let isSubstring;
for(let i=2; i <= str.length / 2; i++){
    isSubstring = true;
    let basic = str.slice(0,i)
    if(str.length % basic.length == 0){
        let index = i;
        while(str.length > index){
            if(basic != str.slice(index, i + index )){
                isSubstring = false;
                break;
            }
            index += index;       
        }
    }else{
        isSubstring = false;
    }

    if(isSubstring && logestSubstring.length < basic.length){
        logestSubstring = basic
    }

}
    if(logestSubstring.length > 0){
        return  logestSubstring; 
        
    }else{
        return -1; 
    }
  
  
}

StringPeriods("abcababcababcab")
StringPeriods("abababababab")
