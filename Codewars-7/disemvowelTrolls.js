const vowels = 'aeiou';

function disemvowel1(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

// const vowels2 = 'aeiouAEIOU';

// function disemvowel2(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels2.includes(letter))
//     .join('');
// }


const disemvowel2 = (str) => {
	
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	
  let newStr = '';

	for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
		//when there is no element exist in the .indexOf method == -1
		if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
		return newStr;
};

// // console.log(disemvowel("This website is for losers LOL!"));

// function disemvowel4(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter(function(el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
//   }


  // console.log(disemvowel("This website is for losers LOL!"));

  console.log(disemvowel1("This website is for losers LOL!"));
  console.log(disemvowel2("This website is for losers LOL!"));