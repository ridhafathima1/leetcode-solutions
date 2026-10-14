/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let a=0;
    let b=0;
    for(let c of s){
        if(c==="L"){
            b++
        }else {
            b--
        }
        if(b===0){
            a++
        }
    }
    return a
};