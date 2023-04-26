// [1,2,3,4,3,5,4,6,7,8]
// length of array 10
// Largest Sum of Consecutive Digits
// sum =>25
// num 4->largest num

// conditions
// num > array =>array
// formula -> 10-4+1 = 7

function LagrestSum(arr,num) {
    if (num>arr) {
        console.log("number is not greater than array")
        
    } else {
        let max = 0;
        for (let i = 0;i < arr.length-num+1; i++) {
          let temp = 0;
            for (let j = 0; j < num; j++) {
                temp+=arr[i+j];
          }
          if(temp > max){
            max=temp
          }
        }
        return max
        
    }
}

const result = LagrestSum([1,2,3,4,3,5,4,6,7,8],3)

console.log(result)