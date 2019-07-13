class Solution {
    public boolean solution(String[] phone_book) {
        for(int i=0; i<phone_book.length-1; i++){
           String temp = "";
           int cnt;
            for(int j = i+1; j< phone_book.length; j++ ){
                if(phone_book[i].length() < phone_book[j].length()){
                     temp =  phone_book[j].substring(0,phone_book[i].length());
                     cnt = i;
               }else{
                     temp = phone_book[i].substring(0,phone_book[j].length());
                     cnt = j;
               }
                  if(phone_book[cnt].equals(temp))  {
                    return false;
                  }                  

            }
            
        }
        return true;
    }
}