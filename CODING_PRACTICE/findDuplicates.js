
let nums =[1,4,6,7,8];
result = nums[1] + nums[2];
console.log(result);


function findDuplicates(array1) {
    let arr = array1.filter((element, index) => array1.indexOf(element) === index
    );
    return arr;
  }
  // const array1 = ;
  // const array2 = [4,5,6, 7, 7, 8];
  console.log(findDuplicates([1, 2, 3, 4, 5, 5])); // [4,5,7]