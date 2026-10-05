/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
   let a=0;
   let b=0;
   for(let move of moves){
    if(move==="U")b++;
    if(move==="D")b--;
    if(move==="L")a--;
    if(move==="R")a++
   }
   return a===0&&b===0;
};