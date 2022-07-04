const arr = [2,5,6,456,2,76,1000,888,69];
let max = arr[0];
// for (let i = 0 ; i < arr.length ; i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
for (let value of arr) {
    if (value > max){
        max = value;
    }
}
console.log(`gia trị lớn nhất là : ${max}`)