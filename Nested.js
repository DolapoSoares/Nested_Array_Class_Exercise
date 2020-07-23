var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
 function printevens(){
     var evens = [];
     for(let i = 0; i < nestedArr.length ; i++){
         for(let j = 0; j < nestedArr[i].length; j++){
            if(nestedArr[i][j] % 2 === 0){
                evens.push(nestedArr[i][j]);
            }
         }
     }
    return evens;
 }
 console.log(printevens(nestedArr));

 var nestedArr = [[1, 2], [3, 4], [5, 6]];

 function sumTotal(){
    var totalSum = 0;
    for(let i = 0; i < nestedArr.length ; i++){
        for(let j = 0; j < nestedArr[i].length; j++){
          
               totalSum += nestedArr[i][j];
    
        }
    }
   return totalSum;
 }

 console.log(sumTotal(nestedArr));

 var nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whisky", ["Janey"], "Tom"]],
    "Lorien"
  ];
  function countVowels(arr){
    const str = arr.toString();
    const vowels = 'aeiou';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase()))
       count++;
    }
  
    return count;
  }
  
  
  
 console.log(countVowels(nestedArr));