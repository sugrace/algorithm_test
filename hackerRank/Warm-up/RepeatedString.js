
function repeatedString(s, n) {
    return Math.floor(n / s.length) * (s.match(/a/gi) || []).length +  (s.substring(0, n % s.length).match(/a/gi) || [] ).length 
}

function main(s, n) {
    let result = repeatedString(s, n);
    console.log(result);
    return result
}

main('aba', 10);