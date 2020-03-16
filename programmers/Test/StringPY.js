function solution(s){
    if(!s.match(/y/ig) || !s.match(/p/ig)) return false;
    return s.match(/y/ig).length === s.match(/p/ig).length
}