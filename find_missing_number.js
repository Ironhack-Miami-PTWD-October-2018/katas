// ************************************************************************************
// Find the missing element in the sequence, example:
// 2,3,4,6 will give you 5.
// 7,8,9,11 will give you 10.
// 1,2,3,5 will give you 4.

// ************************************************************************************

const arr = [3, 5, 6];

function findMissing(someArr){
  
    const min = Math.min(...someArr) - 1;
    // console.log(min);
    // console.log(min+1);
    const sumUpToMin = min * (min+1)/2;
    // console.log(sumUpToMin);
    const theRealSum = Math.max(...someArr) * (Math.max(...someArr) + 1)/2;
    // console.log(theRealSum);

    const theDiff = theRealSum - sumUpToMin;
    // console.log(theDiff);
    const sumOfTheCurrentArray = someArr.reduce((x,y) => x+y, 0);
    // console.log(sumOfTheCurrentArray);
    console.log("The missing number is: ", theDiff - sumOfTheCurrentArray)
}

findMissing(arr);