function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;

    }
    else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}


/// TODO:
/// 闭包
/// 1：对一个数组中的项，两两求和，并返回结果数组，例如[0,1,2,3],则返回[1,5]
/// 2: 对一个数组中的项，两两求积，并返回结果数组，例如[0,1,2,3]，则返回[0,6]
/// 3: 对一个数组中的项，在两两求和的基础上在加上一个值，并返回结果数组,例如[0,1,2,3]，第三个值=10，则返回[11,15]
/// 4: 对一个数组中的项，两两求和，在加上一个数组中的对应项，并返回结果数组
/// 例如: [0,1,2,3] , [5, 7]
/// 返回 [5,12]

var data = [0,1,2,3,4,5];
var data2 = [5,6,7,8];
function mapSum(arr,func){
    var storeArr = [];
    for(var i=0;i<arr.length-1;i+=2){
        storeArr.push(func(arr[i],arr[i+1]));
    }
    return storeArr;
}
function add(num1,num2){
    return num1 + num2;
}
function mul(num1,num2){
    return num1 * num2;
}
function addNewNum(num3){
    return function(num1,num2){
        return num1 + num2 + num3;
    }
}

function addArr(arr){
    var i = -1;
    return function(num1,num2){
        i++;
        return num1+num2+arr[i];
    }
}

//alert(mapSum(data,addArr(data2)));
