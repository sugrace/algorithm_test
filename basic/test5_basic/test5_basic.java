package test5_basic;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class test5_basic{
    public static void main(String[] args) throws FileNotFoundException,IOException{
    BufferedReader in;
    String test_count;
        try{
            in = new BufferedReader(new FileReader("input5.txt"));
            test_count = in.readLine();
            for(int i=0; i<Integer.parseInt(test_count); i++){
                String str = in.readLine();
                Check_pal result = new Check_pal(str);
                System.out.print("#"+i+" ");
                result.check_all();
            }
           
     
     
     
        }catch(NumberFormatException e){
            e.printStackTrace();
        }
        

    }



}