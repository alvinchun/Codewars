function friend(friends){
    return friends.filter(n => n.length === 4)
  }

  const friend = friends => friends.filter(friend => friend.length == 4);

  function friend(friends){
  
    //Create new array called "myFriends" for add your friends
    var i,
        len = friends.length,
        myFriends = [];
    
    
    for (i = 0; i < len; i++) {
          
         //Check for names with length equal to four and it is not a number
         if(friends[i].length == 4 && isNaN(friends[i])) {
            myFriends.push(friends[i]);
         }
        
    }
      
    return myFriends;
  }

  function friend(friends){
    return friends.filter(name => name.length === 4)
  }

  function friend(friends){
    return friends.filter(value => value.length === 4);
  }

  function friend(friends){
    return friends.filter(function (name){
        return name.length == 4;
    });
}

const friend = f => f.filter(n => (isNaN(n) && n.length==4))

function friend(friends){
    //your code here
    var realFriends = [];
    for(i=0; i<friends.length; i++){
      if(friends[i].length == 4 && isNaN(friends[i])){
        realFriends.push(friends[i]);
      }
    }
    
    return realFriends
  }

  function friend(friends){
    return friends.filter(friend=>friend.length===4);
  }

  const friend = (friends) => friends.filter((f) => f.length === 4);

  const friend = f => f.filter(e => e.length == 4);


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
