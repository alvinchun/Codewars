const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

var number = function(busStops){
	var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
  	totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);

var number = function(busStops){
    return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
  }

  var number = function(busStops){
    // Good Luck!
    var num=0;
    for(var i=0;i<busStops.length;i++){
        num+=busStops[i][0]-busStops[i][1]
    }
    return num;
  }

  const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)

  var number = function(busStops){
    let peopleInBus = 0;
    busStops.forEach(([enter, left]) => {
      peopleInBus += enter - left;
    })
    
    return peopleInBus
  }

  const number = busStops => {
    return busStops.reduce((people, next) => { 
      const [on, off] = next;
      return (people + on) - off;
    }, 0);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
