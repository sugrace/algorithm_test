
function twoStrings(s1, s2) {
    let n1 = s1.length;
    for( let i = 0; i < n1; i++ ){
            if( s2.indexOf( s1[i] ) > -1 ){
                return "YES";
            }
    }
   
    return "NO";
}


function main(s1, s2) {
    let result = twoStrings(s1, s2);
    console.log(result);
    return result;
}

main("hello", "world")
main("hi", "world")


