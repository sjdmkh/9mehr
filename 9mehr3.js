function obj1(key0, key1, key2, key3, key4){
    return{
        key0: false,
        key1: 'val1',
        key2: 20,
        key3: [0, 1, 2],
        key4: {name: 'mohammad'},
    }
}
function obj2(key0, key1, key2, key3, key4){
    return{
        key0: false,
        key1: 'val1',
        key2: 20,
        key3: [0, 1, 2],
        key4: {name: 'mohammad'},
    }
}
function isEqual(obj1, obj2){
    if (obj1 = obj2){
        console.log(true)
    }
    else {
        console.log(false)
    }
}

console.log(isEqual(obj1(1,2,3,4,5), obj2(1, 2, 3, 4, 5)))