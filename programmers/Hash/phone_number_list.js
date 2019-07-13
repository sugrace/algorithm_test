function solution(phone_number_list){

  for(let i=0; i<phone_number_list.length;i++){
    for(let j = 0; j<phone_number_list.length; j++){
        let phone_number = phone_number_list[i];
        if(phone_number_list[j]!=phone_number && phone_number_list[j].indexOf(phone_number)!=-1){
            console.log(phone_number,phone_number_list[j])
                return true;
        }
    }
  }
  return false;
}


solution(["12","1353","22353253435","56127","845568"])