function removeUrlAnchor(url){
    return url.split('#')[0];
  }

  function removeUrlAnchor(url){
    // TODO: complete
    return url.replace(/#.*/gi,"");
  }


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
