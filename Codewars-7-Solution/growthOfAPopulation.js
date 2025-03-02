function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }

  function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
      p0 = Math.floor((1 + percent / 100) * p0 + aug);
      count++
    } 
    return count;
  }

  function nbYear(p0, percent, aug, p, years = 0) {
    if (p0 < p) {
      return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
    }
    return years;
  }

  const nbYear = (p0, percent, aug, p) => {
	let result = 0;
	percent /= 100;
	while (p0 < p) {
		p0 += Math.floor(p0 * percent + aug);
		result++;
	}
	return result;
};

console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
