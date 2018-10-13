function add(a) {
var res = a.split(',');
    if(a == ""){
        return 0;   
    } else if (res.length == 1){
        return parseInt(a);
    } else if (res.length == 2){
        return parseInt(res[0]) + parseInt(res[1]);
    } 
  }
  module.exports = add; 
