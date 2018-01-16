//freeCOdeCamp

// Reverse String
// input "hello how are you"
// output "reverseString("hello how are you");

function reverseString2(str) {

    return str.split('').reverse().join('');
}
function reverseString(str) {
    str = str.split(' ').reverse();
    console.log(str);
    var lengthStr = str.length;
    for (var i = 0; i < lengthStr; i++) {
        str[i] = str[i].split('').reverse().join('');
        console.log(str[i]);
    }
    str = str.join(' ');
    console.log(str);
    return str;
}
// console.log(reverseString2("how are you"));

function factorialNumber(num) {
    if (num === 0) {
        num = 1;
    } else {
        var isNum = 1;
        for (var i = 1; i < num; i++) {
            isNum *= i + 1;
        }
        num = isNum;
    }
    return num;
}
// console.log(factorialNumber(10));

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        m = str[i].split('');

        m[0] = m[0].toUpperCase();
        str[i] = m.join('');

    }
    str = str.join(' ');
    return str;
}

//   titleCase("I'm a little tea pot");

//   Seek and Destroy


function destroyer(arr) {
    // Remove all the values
    var arrFirst = arguments[0];
    // convert array-like object to array
    args = Array.prototype.slice.call(arguments);
    for (var j = 1; j < args.length; j++) {
        arr = arr.filter(function (item) {
            return item !== args[j];
        })
        console.log(arr);
    }

    console.log(arr);
    return arr;
}

//   destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Where do I belong
function getIndexToIns(arr, num) {
    var index = 0;
    arr.sort(function (a, b) {
        return a - b;
    })
    for (var i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            index = i + 1;
        }
    }
    console.log(index);
    // Find my place in this sorted array.
    return index;
}

//   getIndexToIns([40, 60,30,67], 50);


//   Caesars Cipher

function rot13(str) { // LBH QVQ VG!    
    var arrCharCode = [];
    for (var i = 0; i < str.length; i++) {
        arrCharCode.push(str.charCodeAt(i));
    }
    arrCharCode = arrCharCode.map(function (item) {
        if (item < 78 && item > 64) {
            return item + 13;
        } else if (item < 91 && item > 77) {
            return item - 13;
        } else {
            return item;
        }
    })
    var str2 = "";
    for (var i = 0; i < arrCharCode.length; i++) {
        str2 += String.fromCharCode(arrCharCode[i]);

    }
    console.log(arrCharCode);
    console.log(str2);
    str = str2;
    return str;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");




// Intermediate Algorithm Scripting


// Sum All Numbers in a Range


function sumAll(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    console.log(arr);
    var result = 0;
    var range = arr[arr.length - 1] - arr[0] + 1;
    console.log(range);
    for (var i = arr[0]; i <= arr[1]; i++) {
        result += i;
    }
    console.log(result);
    return result;
}

//   sumAll([1, 5]);

// Diff array
function diffArray(arr1, arr2) {
    var newArr = [];

    // Same, same; but different.

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                delete arr1[i];
                delete arr2[j];
            }
        }
    }
    var arr = arr1.concat(arr2);
    // filter element empty
    newArr = arr.filter(function (item) {
        return item;
    })
    console.log(newArr);

    return newArr;
}


// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Wherefore art thou
// Global Object
// Object.prototype.hasOwnProperty()
// Object.keys()

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    
    var arrKeySource = Object.keys(source);
    for (var i=0; i<collection.length;i++){
       for(var j=0;j< arrKeySource.length;j++){
           if{collection[i].hasOwnProperty()}
       }

    }
    console.log(collection);
    console.log(arrKeySource);
    
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
