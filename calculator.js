function add(a) {
    var delims = [',','\\n'];
    if(a.indexOf('//') == 0){
        delims.push(a.substring(2,a.indexOf('\n')));
    }
    var sum = 0;
    var negatives = [];
    if(a != ""){
        var res = a.split(new RegExp (delims.join('|'), 'i'));
        for(var i = 0; i < res.length; i++){
            if(parseInt(res[i]) < 0){
                negatives.push(res[i]);
            }
            else if(parseInt(res[i]) <= 1000){
                sum += parseInt(res[i]);
            }
        }  
    }
    if(negatives.length > 0){
        var errorMessage = 'Negatives not allowed:' + negatives;
        throw new Error(errorMessage);
    }  
    return sum;
}
  module.exports = add; 
