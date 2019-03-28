
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.FileNotFoundException;

public class test6_basic{
    public static void main(String[] args) throws FileNotFoundException,IOException{
        BufferedReader in;
        String test_count;
        try{
            in = new BufferedReader(new FileReader("input6.txt"));
            test_count = in.readLine();
            for(int i=0; i < Integer.parseInt(test_count);i++){
                Check_id result = new Check_id(in.readLine());
                System.out.println(result.Check_all());
            }




        }catch(NumberFormatException e){
            e.printStackTrace();
        }
    }
}