function add(a) {
    var res = a.split(new RegExp ([',|\\n']));
    var sum = 0;
    var negatives = [];
    if(a != ""){
        for(var i = 0; i < res.length; i++){
            if(parseInt(res[i]) < 0){
                negatives.push(res[i]);
            }
            sum += parseInt(res[i]);
        }  
    } 
    if(negatives.length > 0){
        var errorMessage = 'Negatives not allowed:' + negatives;
        throw new Error(errorMessage);
    }
    return sum;
  }
  module.exports = add; 
