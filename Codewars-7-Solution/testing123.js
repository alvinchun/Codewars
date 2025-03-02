var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }

  let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

  const number = array => array.map((n, i) => `${i + 1}: ${n}`);

  var number = function(arr) {
    var newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
    }

    function number(arr) {
        return arr.map((e, i) => `${++i}: ${e}`);
      }


      console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
