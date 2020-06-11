function HTMLElements(str) { 
    let stack = [];
    // code goes here  
    let result;
    for(let i=0; i<str.length; i++){
        if(str[i] == '<'){
            startIndex = i;
            j = i+1;
            while(str[j] != '>'){
                j++;
            }
            if(str[i+1] !== '/'){
                stack.push(str.slice(i,j+1))
            }else{
                let tag = stack.pop()
                let tagName = tag.substring(1, tag.length-1);
                if( tagName != str.slice(i+2,j)){
                    result = tagName;
                }
            }
            i = j;
        }
    }
    return result; 
  }

  HTMLElements("<div><div><b></b></div></p>");
  HTMLElements("<div>abc</div><p><em><i>test test test</b></em></p>");