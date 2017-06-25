/********************************************************************************/
// rearrange  array elements with pos & neg
//firstRepeatElement
//removeadjacentrepeatedChar
//subset of a string 'dog' [d,do,dog,o,og,g], combinations of a string
// most frequent element in an array
// sort items of array
//longest item in array
// Alplabetical order of a string
// clone an array
  // count occurance of all the charaters in a string
// find the first not repeated character.
// count the number of occurrences of the specified letter within the string
//bigger ele in the array
// Unique character from string
// Perfect number
// Second lowest and greatest from the array
// Detect data type
// Vowel count in a string
// find the longest word
// converts the first letter of each word of the string in upper case
// is palindrome
// Remove duplicate array
//Reverse each word in a sentence
//Reverse a sentence
/*******************************************************************************/


//Reverse a sentence

function reverseSentence() {
  var str = "Anik Dutta bell manush."
  arr = str.split(' ');
  arrLastStr = arr[arr.length-1].substring(arr[arr.length-1].length-1,0)
  var revStr = '';
  for(var i=arr.length-2;i>=0;i--){
    revStr += arr[i]+' ';
  }
  alert(arrLastStr+' '+revStr+''+'.')
}

test()

//Reverse each word in a sentence

function reverseEachWord() {
  var str = "Anik Dutta bell manush."
  arr = str.split(' ');
  arrLastStr = arr[arr.length-1].substring(arr[arr.length-1].length-1,0).split('');

  var lastStrRev = '';
  for(var k=arrLastStr.length-1;k>=0;k--){
  // console.log(arrLastStr[k])
   lastStrRev += arrLastStr[k];
  }

  var revStr = '';
  for(var i=arr.length-2;i>=0;i--){
  var indStr = arr[i].split('');
  var joinIndStr= '';
  	for(var z=indStr.length-1;z>=0;z--){
    	//console.log(indStr[z]+' ')
      joinIndStr += indStr[z];
    }
  //alert(joinIndStr)

   revStr += joinIndStr+' ';
  }
   alert(lastStrRev+' '+revStr+'.')
}


test()


// Remove duplicate array

function removeDuplicate(arr){
  var exists ={},
      outArr = [],
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
   // alert(!exists[elm])
    if(!exists[elm]){
    	outArr.push(elm)
      exists[elm]=true
    }

}
 return outArr
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))

// is palindrome

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

function isPalindrome(str) {
    for (var k = 0; k < str.length; k++) {
        if (str[k] !== str[str.length - 1 - k]) {
            return false;
        }
    }
    return true;
}

function longestPalindrome(str) {
    var longer = '';
    var tmpStr = '';
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            tmpStr = str.slice(i, j+1);
            if (isPalindrome(tmpStr)) {
                if ((tmpStr.length > longer.length)) {
                    longer = tmpStr;
                    arr.length = 0;
                    arr.push(tmpStr);
                } else if ((tmpStr.length === longer.length)) {
                    arr.push(tmpStr);
                }
            }
        }
    }
    return arr;
}



// converts the first letter of each word of the string in upper case
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];

  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));


// find the longest word

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    }
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// Vowel count in a string

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }

  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

// Detect data type

function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;

if (typeof value === "object" || typeof value === "function")
    {
     for (x = 0, len = dtypes.length; x < len; x++)
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }

    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));

// Second lowest and greatest from the array
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];

  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

// Perfect number

function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }

     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        }
     else
        {
       console.log("It is not a perfect number.");
        }
 }
is_perfect(28);

// Unique character from string
function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x<str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];

   }
  }
  return uniql;
}
console.log(unique_char("aall"));

//bigger ele in the array

function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);

// count the number of occurrences of the specified letter within the string

function char_count(str, letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

// find the first not repeated character.
function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split('');
  var result = '';
  var ctr = 0;

  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;

    for (var y = 0; y < arra1.length; y++)
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }

    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }

  function firstNotRepeated(str) {
    for (let i = 0; i < str.length; i++) {
        const count = str.split(str[i]).length - 1;
        if (count === 1) return str[i];
    }
}

  // count occurance of all the charaters in a string

  var obj={};
for(var i=0;i<qq.length;i++){
 var count=1;
  for(var j=0;j<qq.length;j++){
   alert('i'+qq[i])
alert('j'+qq[j])
    if(qq[i]==qq[j]){
      obj[qq[i]]= count++;
  }
  }
}
  return result;
}
console.log(find_FirstNotRepeatedChar('abacddbec'));

// clone an array

array_Clone = function(arra1) {
 return arra1.slice(0);
  console.log(arra1)
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Alplabetical order of a string

var given = "edcbahklahflakjsdhfjwhgerjhj";
var splitted = given.split("");
var bigger, smaller = "";

for (i = 0; i < splitted.length; i++) {
    for (j = i+1; j < splitted.length; j++) {
        if (splitted[i] > splitted[j]) {
            bigger = splitted[i];
            smaller = splitted[j];
            splitted[j] = bigger;
            splitted[i] = smaller;
        }
    }
}

//longest item in array
function Longest_Country_Name(country_name)
  {
  var arr1=country_name[0]

for(var i=1;i<country_name.length;i++){
 if(arr1.length<country_name[i].length){
   arr1=country_name[i]
 }
}
return arr1
}

// sort items of array
function sort(arr){
 var min=arr[0]
 var arr2=[]
 var max=arr[0]
 var pos
  for(var i=0;i<arr.length;i++){
   if(max<arr[i]){max=arr[i]}
  }

  for(var j=0;j<arr.length;j++){
   for(var k=0;k<arr.length;k++){
     if(arr[k]!=='x'){
       if(arr[k]<min){
         min=arr[k]
         pos = k
       }
     }
   }
   arr2[j]=min
   arr[pos]='x'
  min=max
  }
  return arr2
}

// most frequent element in an array
function mostFre(arr) {
   var count=0;
   var fre=1;
  var item;
  for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr.length;j++){
   if(arr[i]==arr[j]){
     count++
   }
   if(fre<count){
     fre=count
     item=arr[i]
   }
  }
  count=0
  }
  var t = item+';'+fre
  return t
}

// subset of a string 'dog' [d,do,dog,o,og,g], combinations of a string

String.prototype.sub_String = function()
{
  var subset = [];
  for (var m = 0; m < this.length; m++)
  {
    for (var n = m+1; n<this.length+1; n++)
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

function removeadjacentrepeatedChar(){
 var str = 'qazxssswedd'
var prev = str[0]
var str1=str[0]

for(var i=1;i<str.length;i++){
  if(str[i] !== prev){
    str1 = str1+str[i]
    prev = str[i]
  }

}

return str1

}

function firstRepeatElement(arr){
 var str=''
var count=0
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
           if(arr[i] === arr[j]){
              count++
             str=str+arr[i]
           }
      }
alert(arr[i]+',' +count)
count=0
    }

}

// rearrange  array elements with pos & neg
//[1,2,3,-2,-8,9,-10,6,7]
//[-2,1,-8,2,-10,3,9,6,7]
function rearrange(arr){

 var i=-1
 var temp=0
 for(var j=0;j<arr.length;j++){

  if(arr[j]<0){
    i++
    temp=arr[i]
    arr[i]=arr[j]
     arr[j]=temp
  }
 }
 var pos = i+1
var neg=0
while(pos < arr.length && neg<pos && arr[neg]<0){
  temp = arr[neg];
            arr[neg] = arr[pos];
            arr[pos] = temp;
            pos++;
            neg += 2;

}
return arr
}

// rearrange solution 2

function seperatePosNeg(arr){
  var j=-1
  var temp
   for(var i=0;i<arr.length;i++){
     if(arr[i]<0){
       j++
       temp=arr[j]
       arr[j]=arr[i]
       arr[i]=temp
     }

   }
  return arr
}

function rearrange(){
  var aray = seperatePosNeg([1,2,3,-2,-8,9,-10,6,7]) //[-2,-8,-10,1,2,3,9,6,7]
  var result=[]
  for(var i=0;i<aray.length;i++){
   if(aray[i] !== 'x'){
    for(var j=0;j<aray.length;j++){
       if(aray[i]<0 && aray[j]>0 && aray[j] !=='x' ){
           result.push(aray[i],aray[j])
           aray[j]='x'
           aray[i]='x'
            break
         }
    }
   }
    if(aray[i]!=='x'){result.push(aray[i])}
  }
  return aray
}

// You're given an object and a list of property names. Return a list of
// values (or null if not found).
//
// ex:
// let props = ['foo.notStuff.things', 'bar', 'baz'];
// let source = {foo: {stuff: {things: 'found it!'}}, bar: 'rab', notBaz: 'notBaz'};
// let values = find(source, props);
// [null, 'rab', null]
//
function find(source, props) {
  var result=[]
 for(var i=0;i<props.length;i++){
   /*for(var j in source){
     if(props[i] == j){
        result.push(source[j])
     }
   }*/

   var path = props[i].split('.'); //[foo,notStuff,things]
   if(path.length >1){
     for(var j=0;j<path.length;j++){

       var prop = path[j]; // foo
       var prop1 = source[prop]
       if(prop1 != undefined ){
         source = prop1
       } else {
         source = null;
         break;
       }
     }
     results.push(source);
   }

   //result.push(source[prop] == null ? null : source[prop]);

 }
 return result
}

var pubSub = (function(){
   var subscribers={}
   var subscribe = function(event,callback){
     if(!subscribers[event]){
       subscribers[event] = [callback]
     } else {
       subscribers[event].push(callback)
     }
   }

   var publish = function(event,data){
        var obj={}
        obj.event=event
        if(data){obj.data=data}
       if(subscribers[event]){
         subscribers[event].forEach(function(callback){
           callback(obj)
         })
       }
   }

   return {
     sub: subscribe,
     pub: publish
   }

}())
function debounce(fn, delay) {
  // maintain a timer
  let timer = null;
  // closure function that has access to timer
  return function() {
    // get the scope and parameters of the function
    // via 'this' and 'arguments'
    let context = this;
    let args = arguments;
    // if event is called, clear the timer and start over
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

function amountTocoins(amount, coins)
{


  if(amount == 0){
     return []
  } else{
    if(amount >= coins[0]){
         left = amount-coins[0]

          return [coins[0]].concat(amountTocoins(left,coins))
    } else{

       coins.shift()
       return amountTocoins(amount,coins)
    }
  }

}

function findMissingNum(arr){
 var res=[]
 for(var i=1;i<arr.length;i++){
   var dif = arr[i]-arr[i-1]
   var j=1
  if(dif != 1){
    while(j<dif){
      res.push(arr[i-1]+j)
       j++
    }
  }

 }
    return res
}

function longestSubStr(str){
 var longest=''
 var tempStr = ''
 for(var i=0;i<str.length;i++){
     for(var j=i;j<str.length;j++){
       if(tempStr.indexOf(str[j]) !== -1){
            i = str.indexOf(str[j],i)+1
            tempStr=''
          } else{
             tempStr = str.slice(i,j+1)
             if(tempStr.length > longest.length){
                 longest = tempStr
             }
          }
     }
 }
return longest
}

var rotateClockwise = function(matrix) {
  // reverse the rows
  matrix = matrix.reverse();
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

var rotateCounterClockwise = function(matrix) {
  // reverse the individual rows
  matrix = matrix.map(function(row) {
    return row.reverse();
  });
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

var clockwise = JSON.parse(JSON.stringify(original));


function num_string_range(start, end, step) {
    var result = [], i;
    if (typeof start === 'string' && typeof end === 'string' &&
    typeof step === 'number' ) {
        if (start.charCodeAt(0) < end.charCodeAt(0)) {
            for (i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
                result.push(String.fromCharCode(i));
            }
        } else {
           for (i = start.charCodeAt(0); i >= end.charCodeAt(0); i -= step) {
               result.push(String.fromCharCode(i));
           }
        }
    } else if (typeof start === 'number' && typeof end === 'number' &&
    typeof step === 'number' ) {
        if (end > start) {
           for (i = start; i <= end; i += step) {
              result.push(i);
           }
        } else {
            for (i = start; i >= end; i -= step) {
              result.push(i);
           }
        }
    }
    return result;
}
console.log(num_string_range('a', "z", 2));
//["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

Function.prototype.bind = function (scope) {
    var fn = this;
    return function () {
        return fn.apply(scope);
    };
}

Array.prototype.shuffle = function(){
  var len = this.length;
    var temp ;

  while(--len >0){
    var randomNum = Math.floor(Math.random()*(len+1));
    temp = this[randomNum];
    this[randomNum] = this[len];
    this[len] = temp;
  }
  return this;
}


function replaceMulSpaceWithSingle(){
  var intIndexOfMatch = string_variable.indexOf("  ");

  while (intIndexOfMatch != -1){
    string_variable = string_variable.replace( "  ", " " )
    intIndexOfMatch = string_variable.indexOf( "  " );
  }
}

function array_binarySearch(narray, delement) {
   var mposition = Math.floor(narray.length / 2);

   if (narray[mposition] === delement){
      return mposition;
   }
   else if (narray.length === 1)
   {
      return null;
   }
   else if (narray[mposition] < delement) {
      var arr = narray.slice(mposition + 1);
      var res = array_binarySearch(arr, delement);
      if (res === null)
      {
         return null;
      }
      else {
         return mposition + 1 + res;
      }
   }
   else {
      var arr1 = narray.slice(0, mposition);
      return array_binarySearch(arr1, delement);
   }
}

 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];

 function three_digit_armstrong_number()
{
 for (var i = 1; i < 10; ++i)
 {
   for (var j = 0; j < 10; ++j)
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus)
           {
             console.log(pow);
            }
         }
       }
    }
  }

  function numberOfS (y) {
for(var n ="*"; n.length <= y; n += "*") {
console.log(n);
}
}

var fibonacci_series = function (n)
{
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};


function EventTarget(){
    this._listeners = {};
}

EventTarget.prototype = {

    constructor: EventTarget,

    addListener: function(type, listener){
        if (typeof this._listeners[type] == "undefined"){
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
    },

    fire: function(event){
        if (typeof event == "string"){
            event = { type: event };
        }
        if (!event.target){
            event.target = this;
        }

        if (!event.type){  //falsy
            throw new Error("Event object missing 'type' property.");
        }

        if (this._listeners[event.type] instanceof Array){
            var listeners = this._listeners[event.type];
            for (var i=0, len=listeners.length; i < len; i++){
                listeners[i].call(this, event);
            }
        }
    },

    removeListener: function(type, listener){
        if (this._listeners[type] instanceof Array){
            var listeners = this._listeners[type];
            for (var i=0, len=listeners.length; i < len; i++){
                if (listeners[i] === listener){
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};

var target = new EventTarget();
function handleEvent(event){
    alert(event.type);
};

target.addListener("foo", handleEvent);
target.fire({ type: "foo" });    //can also do target.fire("foo")
target.removeListener("foo", handleEvent);


function MyObject(){
    EventTarget.call(this);
}

MyObject.prototype = new EventTarget();
MyObject.prototype.constructor = MyObject;
MyObject.prototype.foo = function(){
    this.fire("foo");
};

var o = new MyObject();

o.addListener("foo", function(){
    alert("Foo just happened.");
});

o.foo();






I feel that my proven track record leading multi-functional teams makes me an excellent match for the job requirements.
 Also, the role excites me because I love the idea of helping to develop cutting-edge software products and I know I could
  start delivering results from Day 1.

  I think one of my greatest strengths is as a problem solver. I have the ability to see a situation from different perspectives
   and I can get my work done even in the face of difficult obstacles. I also feel that my communication skills are top notch.
    I feel just as comfortable presenting to senior executives as I do mediating a conflict between junior team members.


const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {

  const results = [];

  while (left.length && right.length) {

    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }

  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }

  return results;
};


function deepEq(a,b){
    if(a === b){
       return true
    } else if(a && b && typeof a === 'object' && typeof b === 'object' &&
     Object.keys(a).length === Object.keys(b).length){
          if(Array.isArray(a) === Array.isArray(b)){
             for(var i in a){
                if(i in b){
                  if(!deepEq(a[i],b[i])){
                     return false
                  }
                }
             }
           return true
          }

     }
return false
}

function nLarger(arr, n) {
var k = 0;
var top = [];
while (k < n) {
top[k] = 0;
for (var i = 0; i < arr.length; i++) {
if (arr[i] > top[k] && top.indexOf(arr[i])==-1) {
top[k] = arr[i];
}
}
k++
}
return top[n-1]
}

function anagram(str){
  if(str.length<=2){
    return [str]
  } else{
     var resultArr=[]
     for(var i=0;i<str.length;i++){
       var word = str[i]
       var remainingWord = str.slice(0,i)+str.slice(i+1)
       var passReaminingStr = anagram(remainingWord)
       for(var j=0;j<passReaminingStr.length;j++){
         resultArr.push(word+passReaminingStr[j])
       }
     }
return resultArr
  }
}

function getCombination(s) {
    function c(left, right) {
        if (!left) {
            result.push(right);
            return;
        }
        // checks if the first character of left is in the letter object
        // then call c without the first letter of left
        // and right with the letter from the letter object of the first character
        if(letters[left[0]]){
           c(left.substring(1),right+letters[left[0]])
        }
        //letters[left[0]] && c(left.substring(1), right + letters[left[0]]);

        // it is basically the same as above, but with two characters
        if(left.length>1 && letters[left.substring(0,2)){
          c(left.substring(2), right+letters[left.substring(0,2)])
        }
       // left.length > 1 && letters[left.substring(0, 2)] && c(left.substring(2), right + letters[left.substring(0, 2)]);
    }

    var letters = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'q', 18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z' },
        result = [];

    c(s, '');
    return result;
}

//var add3 = curry(add, 3)
//add3(4)
//curry(add,4)(5)

function curry(fn,num1){
  return function(num2){
    return fn(num1,num2)
  }

}

function extend(ChildClass, ParentClass) {
  ChildClass.prototype = new ParentClass();
  ChildClass.prototype.constructor = ChildClass;
}

Object.prototype.extend = function(object) {
  // loop through object
  for (var i in object) {
    // check if the extended object has that property
    if (object.hasOwnProperty(i)) {
      // mow check if the child is also and object so we go through it recursively
      if (typeof this[i] == "object" && this.hasOwnProperty(i) && this[i] != null) {
        this[i].extend(object[i]);
      } else {
        this[i] = object[i];
      }
    }
  }
  return this;
};

defaults.extend(options);

function string_chop(str, n) {
  if (n === undefined) {return str;}
  var res = [];
  for (var i = 0; i < str.length; i +=n) {
      res.push(str.slice(i, i+n));
  }
  return res;
}

const myMap = (array, fn) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
};

const myReduce = (list, fn, seed) => {
  let answer = seed;
  for (let i = 0; i < list.length; i++) {
    answer = fn(answer, list[i]);
  }
  return answer;
};

const myFilter = (list, fn) => {
  const answer = [];
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      answer.push(list[i]);
    }
  }
  return answer;
};
