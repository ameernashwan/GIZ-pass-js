var fs = require('fs');
const { join, parse } = require('path/posix');


let numbers = [5,8,0,1,9,11,15,16];

console.log("Original numbers list: ", numbers)
// making function take an array and sort it from lower to higher 
function sort(nums){

    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length - i - 1 ; j++){
            // replace i to j beacuse should be compare current item with next item in array
            if(nums[j] > nums[j + 1]){
                let temp = nums[j];
                nums[j] = nums[j + 1]
                nums[j + 1] = temp;
            }
        }
    }
    return nums
    }

console.log("Numbers list After sorting: ", sort(numbers))

function sortDes(nums){
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums.length - 1 ; j++){
            // here we need to replace > to < because we need it at DESC
            if(nums[j] < nums[j + 1]){
                let temp = nums[j];
                nums[j] = nums[j + 1]
                nums[j + 1] = temp;
            }
        }
    }
    return nums
}

console.log("Numbers list After DESC sorting: ", sortDes(numbers))
//reading content Sfrom data
let a = fs.readFileSync('data.txt' , 'utf-8');
// converting to array
let f = a.split(",").map(Number).sort();
// sorting array to ASC order
let c = f.join();

fs.writeFileSync('output.txt' , c , function(err){
    if (err) {
        console.log("error", err)
        return;
    }
})
