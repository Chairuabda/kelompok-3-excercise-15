module.exports = {
    sort,
    sort1,
    getMinimumDate,
    calculateSum,
    longestCommonPrefix,
  };
  //nomor 5
  //with sort function
  function sort(str) {
    let arr = str.split("");
    arr.sort();
    let sortedStr = arr.join("");
    return sortedStr;
  }
  
  //without sort function
  function replaceAt(str, i, char) {
    return str.substr(0, i) + char + str.substr(i + 1);
  }
  
  function swap(str, i1, i2) {
    return replaceAt(replaceAt(str, i1, str[i2]), i2, str[i1]);
  }
  
  function sort1(str) {
    var sorted = str;
    for (var i = 0; i < str.length; i++) {
      if (str[i] > str[i + 1]) {
        str = swap(str, i, i + 1);
      }
    }
    return str;
  }
  
  //nomor 6
  
  function getMinimumDate(dateArray) {
    return new Date(Math.min.apply(null, dateArray));
  }
  
  //nomor 7
  
  function calculateSum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    }
  
    return sum;
  }
  
  //nomor 8
  
  function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
  
    let prefix = strs[0];
  
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
  
        if (prefix === "") {
          return "";
        }
      }
    }
  
    return prefix;
  }
  