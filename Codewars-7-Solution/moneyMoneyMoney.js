function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(
      Math.log(desired / principal) / 
      Math.log(1 + interest * (1 - tax))
    );
  }

  function calculateYears(principal, interest, tax, desired) {
    var year = 0;
        while (principal < desired){
            principal += principal * interest * (1 - tax);
            year +=1;
         }
        return year;
    }

    function calculateYears(P,I,T,D) { return Math.ceil( Math.log(D/P) / Math.log1p(I*(1-T)) ); }

    function calculateYears(principal, interest, tax, desired) {
        var start = 0;
        while(principal < desired) {
          var intBeforeTax = principal * interest;
          var intRate = (intBeforeTax - (intBeforeTax * tax));
          principal+=intRate;
          start++;
        }
        return start;
    }

    function calculateYears(principal, interest, tax, desired) {
        let years = 0;
        while (principal < desired){
          years++;
          principal = getYearEndPrincipal(principal, interest, tax);
        }
        
        return years;
      }
      
      function getYearEndPrincipal(principal, interest, tax){
        const preTaxPrincipal = principal + (principal * interest);
        const taxOwed = (preTaxPrincipal - principal) * tax;
        return preTaxPrincipal - taxOwed;
      }

      const calculateYears = (P, I, T, D) => {
        let year = 0;
        while (P < D && ++year) P += (P * I) - (P * I * T);
        return year;
      };


      console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
