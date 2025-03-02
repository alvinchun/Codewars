reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

function reverseLetter(str) {
    return str.split('')
              .reverse()
              .filter(val => /[a-zA-Z]/.test(val))
              .join('');  
  }

  function reverseLetter(str) {
    //coding and coding..
    return str.match(/[a-z]/ig).reverse().join('');
    
  }

  function reverseLetter(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}

function reverseLetter(str) {
    return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
  }

  function reverseLetter(str) {
	let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let word = '';
	for(let i = str.length - 1; i >= 0; i--){
		for(let k= 0; k <= alphabet.length - 1; k++){
			if(str[i] == alphabet[k]){
				word = `${word + str[i]}`;
			}
		}
	}

	return word;
  
  
}

const reverseLetter = str => str.match(/[a-zA-Z]/g).reverse().join('');

function reverseLetter(str) {
    return str.replace(/[^a-z]/g, "").split("").reverse().join("");
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
