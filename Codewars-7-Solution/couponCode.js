function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }

  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }

  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode &&
           Date.parse(currentDate) <= Date.parse(expirationDate);
  }

  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var cd = new Date(currentDate);
    var ed = new Date(expirationDate);
    return (enteredCode === correctCode) && (ed >= cd);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
