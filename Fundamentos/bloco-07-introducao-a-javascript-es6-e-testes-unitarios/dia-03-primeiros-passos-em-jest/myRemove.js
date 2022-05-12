function myRemove (arr, item) {
    let novo = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== item) {
            novo.push(arr[i]);
        }
    }
    return novo;    
}
module.exports = myRemove;
// console.log(myRemove([1, 2, 3, 4], 5));