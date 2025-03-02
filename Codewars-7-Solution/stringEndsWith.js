function solution(str, ending){
    return str.endsWith(ending);
  }

  const solution = (str, ending) => str.endsWith(ending);

  function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
  }

  function solution(str, ending){
    return str.substr(-ending.length) == ending;
  }

  const solution = (str, ending) => str.endsWith(ending)

  function solution(str, ending){
    return str.slice(0 - ending.length) === ending;
  }

  function solution(str, ending){
    var l = ending.length;
    var str = str.slice(-l);
    return str.match(ending) ? true : false;
  }

  const solution = (s, t) => s.endsWith(t);

  function solution(str, ending){
    // TODO: complete
    return ending === str.substr(str.length - ending.length, str.length);
  }

const solution=(s,e)=> s.endsWith(e)

function solution(str, ending){
    // TODO: complete
    return ending === str.substr(str.length - ending.length, str.length);
  }


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
