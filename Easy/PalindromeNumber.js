var isPalindrome = function(x) {
    let a=x.toString()
    let b=a.split("").reverse().join("")
   if(a===b){
    return true
   }else{
    return false
   }
    
};