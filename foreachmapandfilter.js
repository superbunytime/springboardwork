//doubleValues

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(doubleValues)

// function doubleValues(x){
//     console.log(x+x)
// }

//onlyEvenValues

// const evens = []

// function onlyEvenValues(x){
//     x%2 == 0 ? evens.push(x) : false
// }

// const nums = [1, 2, 3, 4, 5, 8, 9, 10, 134351, 2, 325]

// nums.forEach(onlyEvenValues)
// console.log(evens)

//showFirstAndLast

// const strings = ['oghasdk', 'blrgh', 'no', 'why']
// const strFL = []

// function showFirstAndLast(str){
//     strFL.push(str[0] + str[str.length-1])
// }

// strings.forEach(showFirstAndLast)
// console.log(strFL)

//addKeyandValue

// const objArr =[{name: 'Elie'},
// {name: 'Tim'},
// {name: 'Matt'},
// {name: 'Colt'}]

// function addKeyAndValue(arr, key, value) {
//     arr.forEach(function(val) {
//       val[key] = value;
//     });
//     return arr;
//   }

//   console.log(addKeyAndValue(objArr,'title', 'instructor'))

// function vowelCount(str){
//     let strLower = str.toLowerCase()
//     let vowels = "aeiou"
//     for(let i = 0; i < strLower.length; i++){
//         if(strLower.search(vowels) != -1){
//             console.log(`vowels detected in ${strLower}: ${strLower[i]}`)
//         } else{
//             console.log(`there were no vowels detected in the string ${strLower}`)
//         }
//     }
// }

// function vowelCount(str) {
//     let splitArr = str.split("");
//     let obj = {};
//     const vowels = "aeiou";
  
//     splitArr.forEach(function(letter) {
//       let lowerCasedLetter = letter.toLowerCase()
//       if (vowels.indexOf(lowerCasedLetter) !== -1) {
//         if (obj[lowerCasedLetter]) {
//           obj[lowerCasedLetter]++;
//         } else {
//           obj[lowerCasedLetter] = 1;
//         }
//       }
//     });
//     return obj;
//   }

// let str1 = "stR1";
// let str2 = "aeiou";
// let str3 = "AeIoUUioeuoeuieoue";
// console.log(vowelCount(str1));
// console.log(vowelCount(str2))
// console.log(vowelCount(str3))

// function doubleValuesWithMap(arr){
//     const NewArr = arr.map(double)
//     return NewArr
// }

// function double(num){
//     return num += num
// }

// console.log(doubleValuesWithMap([1,2,3]))
// console.log(doubleValuesWithMap([1, -2, -3]))

// function valTimesIndex(arr){
//     const newArr = arr.map(valIn)
//     return newArr
// }

// function valIn(i, arrItem){
//     return (arrItem * i)
// }

// console.log(valTimesIndex([1, 2, 3]))
// console.log(valTimesIndex([1, -2, -3]))

// function extractKey(arr, key) {
//     return arr.map(function(val) {
//       return val[key];
//     });
//   }

//  console.log(extractKey(
//     [
//       {name: 'Elie'},
//       {name: 'Tim'},
//       {name: 'Matt'},
//       {name: 'Colt'}
//     ],
//     'name'
//   ))

// function extractFullName(arr) {
//   return arr.map(function (val) {
//     return `${val.first} ${val.last}`;
//   });
// }

// console.log(
//   extractFullName([
//     { first: "Elie", last: "Schoppik" },
//     { first: "Tim", last: "Garcia" },
//     { first: "Matt", last: "Lane" },
//     { first: "Colt", last: "Steele" },
//   ])
// );

// function filterByValue(arr, key) {
//     return arr.filter(function(value) {
//       return value[key] !== undefined;
//     });
//   }

// const someArr = [{first: 'Elie', last:"Schoppik"},
// {first: 'Tim', last:"Garcia", isCatOwner: true},
// {first: 'Matt', last:"Lane"},
// {first: 'Colt', last:"Steele", isCatOwner: true}]

// console.log(filterByValue(someArr, 'isCatOwner'))

// function find(arr, searchVal) {
//     return arr.filter(function(val) {
//       return val === searchVal;
//     })[0];
//   }

// const someArr = [1, 2, 3, 4]

// console.log(find(someArr, 3))
// console.log(find(someArr, 10))

// function findInObj(arr, key, searchVal){
//     return arr.filter(function(val) {
//         return val[key] === searchVal;
//       })[0];

// }

// console.log(findInObj(
//     [
//       {first: 'Elie', last:"Schoppik"},
//       {first: 'Tim', last:"Garcia", isCatOwner: true},
//       {first: 'att', last:"Lane"},
//       {first: 'Colt', last:"Steele", isCatOwner: true}
//     ],
//     'isCatOwner',
//     true
//   ))

// function removeVowels(str) {
//     const vowels = "aeiou";
//     return str.toLowerCase().split("").filter(function(val) {
//         return vowels.indexOf(val) === -1;
//       })
//       .join("");
//   }

//   const str1 = 'AIOUERHALFDSYUFE'
//   const str2 = 'aeiou'
//   console.log(removeVowels(str1))
//   console.log(removeVowels(str2))

// function doubleOddNumbers(arr) {
//     return arr.filter(function(val) {
//         return val % 2 !== 0;
//       }).map(function(val) {
//         return val * 2;
//       });
//     }

// const arr1 = [1, 2, 3, 4]
// const arr2 = [2, 4, 3]

// console.log(doubleOddNumbers(arr1))
// console.log(doubleOddNumbers(arr2))

//commented everything out to prevent variable naming conflicts