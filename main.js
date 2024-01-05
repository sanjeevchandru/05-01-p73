document.write("37. to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case."+"<br>");
function test37(str){
    if(str.length<3){
        return str.toUpperCase();
    }
    var x=str.substring(0,3).toLowerCase();
    var y=str.substring(3);
    return x+y;
}
document.write("The string is :SANJEEV ,Ans :"+test37("SANJEEV")+"<br>");
document.write("The string is :sm ,Ans :"+test37("sm")+"<br><br>");