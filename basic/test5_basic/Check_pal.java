package test5_basic;

class Check_pal {
    String str;
    int start = 0;
    int odd_end = 3;
    int even_end = 4;
    int count=0;
    public Check_pal(String str){
        this.str = str;
    }
    
    public void check_all(){
        //홀수 검사
        while(odd_end <= str.length()){
            if(check(str.substring(start,odd_end))==true){
                    System.out.print(str.substring(start,odd_end)+" ");
                    count++;
                if(start - 1 >= 0 && odd_end + 1 <= str.length()){
                   start--;
                   odd_end++;
                   continue;
                }
            };
          start = (start + odd_end)/2 ; 
          odd_end = start+3;
        }
        //짝수 검사
        start = 0 ;
         while(even_end <= str.length()){
            if(check(str.substring(start,even_end))==true){
                    System.out.print(str.substring(start,even_end)+" ");
                    count++;
                if(start - 1 >= 0 && even_end + 1 <= str.length()){
                   start--;
                   even_end++;
                   continue;
                }
            };
          start = (start + even_end)/2 - 1 ; 
          even_end = start+4;
        }
            if(count == 0){
                System.out.println(count);
            }        
            else{
                System.out.println(" ,"+count);
            }
        }
    
    
    
    
    private boolean check(String str){
        return str.compareTo((new StringBuffer(str)).reverse().toString())==0;
    }
    
                
    
    
    }
