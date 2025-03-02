const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

const removeDuplicateWords = s => {
    const set = new Set(s.split(' '));
    return Array.from(set).join(' ');
  }

  function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ');
  }

  const removeDuplicateWords = s => {
    let arr = s.split(" ");
    let sFiltered = [];
    
    for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)
    
    return sFiltered.join(" ")
  }

  function removeDuplicateWords (s) {
    return s.split(' ').filter((n, i, s) => {
      return s.indexOf(n) === i;
    }).join(' ');
  }

  const removeDuplicateWords = s => s.split(' ').filter((w,i,arr)=>arr.indexOf(w)==i).join(' ');

  const removeDuplicateWords = s => {
    let cleanArr = [];
    s.split(' ').forEach(current => {
        if(!cleanArr.includes(current)){
            cleanArr.push(current);
        }
    });
    return cleanArr.join(' ');
  };

  function removeDuplicateWords (s) {
    let unique = new Set(s.split(' '));
    return [...unique].join(' ');
  }

  function removeDuplicateWords (string) {
    let array = string.split(" ")
    let obj = {};
    array.forEach(function(i) {
      if(!obj[i]) {
        obj[i] = true;
      }
    });
    return Object.keys(obj).join(' ');
  }
    
  function removeDuplicateWords (str) {
    let newStr = str.split(" ")
    let newArr = []
    
    newStr.forEach((element) => {
      if(!newArr.includes(element)) {
        newArr.push(element)
      }
    })
     return newArr.join(" ")
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
