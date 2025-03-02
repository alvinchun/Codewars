function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }

  function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
  
}

function getMiddle(string) {
    var middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
      return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return string.charAt(middleIndex);
    }
  }


  function getMiddle22(string) {
    if(string.length % 2 === 0){
        return string[(string.length/2)-1] + string[string.length/2]
      }else{
        return string[Math.floor(string.length/2)]
      }
    }



  console.log(getMiddle22("test")); // 1 2    4
  console.log(getMiddle22("tester")); // 2 3    6
  console.log(getMiddle22("apple")); // 2    5
  console.log(getMiddle22("cat")); // 1    3




