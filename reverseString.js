function reverse(str){
    var rev = "";

    for(var i=0; i<str.length;i++){
        var char = str[i];
        rev = char + rev;
    }
    return rev;

}

var string="Hello Good Brothers";

var result = reverse(string);

console.log(result);