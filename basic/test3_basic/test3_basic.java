package test3_basic;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class test3_basic{
    public static void main(String[] args) throws FileNotFoundException, IOException{
    BufferedReader in;
    int count = 0;
    int n; //n X n 배열?�� 만들?�� n ?���?
    String points; //좌표?��?�� �? 
    int testNum; //?��?��?���??��?��
    String arrNum[][]; //2차원 배열

    try{
        in = new BufferedReader(new FileReader("input3.txt"));
        testNum = Integer.valueOf(in.readLine());
        for(int num=1; num<testNum+1; num++){
            count=0;
            n = Integer.parseInt(in.readLine());
            System.out.println(n);
            points = in.readLine();
            System.out.println(points);
            arrNum = new String[n][n];
            Queen queen = new Queen(points, arrNum);
            arrNum=queen.explode();
            for(int i = 0 ; i<n; i++){
                for(int j =0 ; j<n; j++){
                    System.out.print(arrNum[i][j]+ " ");
                    if(arrNum[i][j]==null){
                        count++;
                    }
                }
                System.out.println();
            }
        System.out.println("#"+num+" "+count);
        System.out.println("---------------------------------"); 
        }
    }catch(NumberFormatException e){
        e.printStackTrace();
    }
  }
}