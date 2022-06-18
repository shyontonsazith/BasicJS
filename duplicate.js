var number = [1,2,3,5,4,1,6,5,8,9,11,5,10,2,5,3];
var uniqueNumber = [];

for(var i=0; i<number.length;i++){
    var element = number[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1){
        uniqueNumber.push(element);
    }

}
console.log(uniqueNumber);
