var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

function DNAStrand(dna){
    //your code here
    var result= "";
            for(var i =0; i<dna.length; i++) 
            {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
           }
       return result;
      }
     
      let pairs = {A:'T',T:'A',C:'G',G:'C'};
      const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

      function DNAStrand(dna) {
        return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
      }

      function DNAStrand(dna){
        var table = {
          C : 'G',
          G : 'C',
          A : 'T',
          T : 'A'
        };
          
        return dna.split('').map(function(cv) {
          return table[cv]; 
        }).join('');
      }

      function DNAStrand(dna){
        let newDNA = "";
        let dnaKeys = {
          "A": "T",
          "T": "A",
          "C": "G",
          "G": "C"
        };
        
        for (let i = 0; i < dna.length; i++) {
          let char = dna[i];
          
          newDNA += dnaKeys[char];
        }
        
        return newDNA;
      }

      console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
