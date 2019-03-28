
class Check_id{
    String num;
    
    
    public Check_id(String num){
        this.num = num;
    }

    public String Check_all(){
        boolean flag = false;
        // System.out.println(Check_checksum(num));
        if(Check_local(num.substring(0,6)) && Check_birth(num) && Check_checksum(num)){
            flag = true;
        };
        if(flag == false){
            return "INVALID";
        }else{
            if(Integer.parseInt(num.substring(14,17))%2==0){
                return "WOMAN";
            }
            return "MAN";
        }
       
    }


    private boolean Check_local(String str){
       boolean flag = false;
        for(int i=1; i<1000000; i*=10){
            if( Integer.parseInt(str) == i){
                flag = true;
                    break;  
                }
            }
        return flag;
    }
    private boolean Check_birth(String str){
        boolean flag = false;
        int year=Integer.parseInt(str.substring(6,10));
        int month=Integer.parseInt(str.substring(10,12));
        int day = Integer.parseInt(str.substring(12,14));;
        if(1900 <= year && year <= 2014){
            if(1 <= month && month <= 12){
                if(month == 4 || month ==6 || month == 9 || month == 11){
                    if(1 <= day && day <=31){
                        flag = true;
                    }
                }
                else if(month == 2 && year%4 == 0){
                    if(1 <= day && day <=29){
                        flag = true;
                    }
                }else if(month == 2 && year%4 !=0 ){
                    if(1 <= day && day <= 28){
                        flag = true;
                    }
                }else {
                    if(1<= day && day <= 31){
                        flag =true;
                    }
                }
            
            
            }

        }


        return flag;
    }
    private boolean Check_checksum(String num){
        int count=0;
        int sum=0;
        int two=2;
        int checksum;
        if(num.substring(17).compareTo("X")==0){
            checksum=0;
        }else{
           checksum = Integer.parseInt(num.substring(17));
        }
        if(Integer.parseInt(num.substring(14,17))!=0){
            while(count < 17){
               
                System.out.print(Integer.parseInt(num.substring(16-count,17-count)));
                sum= sum + (two*Integer.parseInt(num.substring(16-count,17-count)));
                two *= 2;
                count++;
            }
              System.out.println("   "+sum+" "+two+" "+checksum);
            if(checksum == (sum % 11)){
                return true;
            }
        }

        
        return false;
    }
}

