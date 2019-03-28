package test1_basic;

class Point{
    private int x,y,type;
    public Point(int x,int y,int type){
        this.x=x;
        this.y=y;
        this.type=type;
    }

     int get_x(){
        return this.x;
    }
     int get_y(){
        return this.y;
    }
    int get_type(){
        return this.type;
    }
}