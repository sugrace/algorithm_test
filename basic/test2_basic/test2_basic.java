package test2_basic;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class test2_basic{
    public static void main(String[] args) throws FileNotFoundException,IOException{
    BufferedReader in;
    String test_count;
    boolean result;
        try{
            in = new BufferedReader(new FileReader("input2.txt"));
            test_count = in.readLine();
            for(int i=0; i<Integer.parseInt(test_count); i++){
                String num = in.readLine();
                Reverser reverser = new Reverser(num);
                result = reverser.is_palindrome();
                System.out.println(result);
         
            }
           
     
     
     
        }catch(NumberFormatException e){
            e.printStackTrace();
        }
        

    }



}