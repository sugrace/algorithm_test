package test1_basic;

class Bomb {
    String[][] arrNum;
    String[] bomb_type;
    int n ;
    public Bomb(String points, String[][] arrNum){
        this.arrNum = arrNum;
        this.n = arrNum[0].length;
        this.bomb_type = points.split(",");
    }
    public String[][] explode(){
        for(int i=0; i<bomb_type.length; i++){
            String[] bomb_points = bomb_type[i].split(" ");
             for(int j=0; j<bomb_points.length; j=j+2){
                Point bomb_point = new Point(Integer.parseInt(bomb_points[j]),Integer.parseInt(bomb_points[j+1]),i); 
                explode_bomb(bomb_point);
             }
        }
        return arrNum;
    }
    private void explode_bomb(Point bomb_point){
        int type = bomb_point.get_type();
        int x= bomb_point.get_x();
        int y= bomb_point.get_y();
        arrNum[x][y]="bomb";
            for(int i =0 ;i < type+1; i++){
                if(x-(i+1)>=0)
                    arrNum[x-(i+1)][y]="bomb";
                if(x+(i+1) <= n-1)
                     arrNum[x+(i+1)][y]="bomb";
                if(y-(i+1) >=0)
                    arrNum[x][y-(i+1)]="bomb";
                if(y+(i+1) <= n-1)
                    arrNum[x][y+(i+1)]="bomb";
                }
    }
}