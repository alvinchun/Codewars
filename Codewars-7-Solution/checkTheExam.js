function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
      if (e === "") {
        return a;  
      }
      
      if (e === array1[idx]) {
        return a += 4;
      }
      
      return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
  }

  const checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;

  const checkExam = (array1, array2) => {
    let result = array2.reduce(
      (score, answer, i) => {
        if(answer == array1[i]) return score += 4;
        else if(answer == 0) return score += 0;
        else return score - 1;
      }
    , 0);
    return result < 0 ? 0 : result;
  }

  const checkExam=(arr1,arr2)=>Math.max(arr2.reduce((a,b,i) =>b==arr1[i]?a+4:b?a-1:a,0),0)

  const checkExam = (array1, array2) =>
    Math.max(array2.reduce((pre, val, idx) => val ? val === array1[idx] ? pre + 4 : --pre : pre, 0), 0);

  const checkExam = (arr1, arr2) => {const num = arr2.map((e, i)=> e === '' ? 0 : e === arr1[i] ? 4 : -1).reduce((x, y) => x + y); return num > 0 ? num : 0}


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
