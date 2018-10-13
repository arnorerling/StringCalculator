function add(a) {
    var res = a.split(new RegExp ([',|\\n']));
    var sum = 0;
    if(a != ""){
        for(var i = 0; i < res.length; i++){
            sum += parseInt(res[i]);
        }  
    } 
    return sum;
  }
  module.exports = add; 
