function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }

  function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

function solution(nums){
    return nums ? nums.sort(function(a, b) { return a - b;}) : [];
  }

  function solution(nums){
    return nums ? nums.sort((a,b)=>a-b) : []
  }

  let solution = (nums) => (nums || []).sort((a,b) => (a-b))

  const solution = nums =>
    nums ?
    nums.sort((a,b) => a-b) :
    [];

    function solution(nums){
        if(nums===null)
          return [];
       return nums.sort(sortNum);
      }
      
      function sortNum(a,b) {
          return a - b;
      }


      console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
