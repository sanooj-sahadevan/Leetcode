/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
   let i =0
    let X = 0
   for(i=0;i<operations.length;i++){
        if(operations[i]=='++X'|| operations[i]=='X++'){
            X ++;
        }else{
            X--
        }
       
    }
    return X
    
};