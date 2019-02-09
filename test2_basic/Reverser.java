package test2_basic;

public class Reverser{
    String num;
    String reverse_num;
    String result_num;
    String reverse_result;

    public Reverser(String num){
        this.num = num;
        this.reverse_num=(new StringBuffer(num)).reverse().toString();
        this.result_num = Integer.toString(Integer.parseInt(this.num) + Integer.parseInt(this.reverse_num));
        this.reverse_result = (new StringBuffer(result_num)).reverse().toString();
    }

    public boolean is_palindrome(){
        if(result_num.compareTo(reverse_result) == 0)
            return true;
        return false;
    }
    

}