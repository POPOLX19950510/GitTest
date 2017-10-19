//源型本身使用的方法
var array=[1,2,3,4,5];
delete array[1];
array.forEach(function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
});

//衍生
// function log(value,index,arr) {
//     console.log(value);
//     console.log(index);
//     console.log(arr);
// }
// for(var i=0;i<array.length;i++){
//     log(array[i],i,arr);
// }

//实现添加原型
Array.prototype.myForEach=function (callback,thisArg) {
    if(typeof callback!=='function'){
        try{
            throw new TypeError(callback+' is not a function');
        }
        catch(e){
            console.error(e);
        }
    }else {
        for(var i=0;i<this.length;i++){
            if(Object.prototype.hasOwnProperty.call(this,i)){
                callback(this[i],i,this);
            }
        }
    }
}
array.myForEach( function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
});
// arrar.myForEach(console.log);

console.log(Object.prototype.hasOwnProperty.call(array,2));