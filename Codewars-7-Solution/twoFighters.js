function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
      return fighter2.name;
    } else if(fac2 < fac1) {
      return fighter1.name;
    } else {
      return firstAttacker;
    }
  }

  function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      fighter1.health -= fighter2.damagePerAttack;
    }
    
    if (fighter1.health <= 0 && fighter2.health <= 0)
      return firstAttacker;
    else if (fighter1.health <= 0)
      return fighter2.name;
    else
      return fighter1.name;
  }

  function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
    if (fighter1.health <= 0) return fighter2.name
    if (fighter2.health <= 0) return fighter1.name
  
    return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
  }

  Object.defineProperties(Fighter.prototype, {
    isDead: {get: function() { return this.health <= 0; } },
    attack: {value: function(other) { other.health -= this.damagePerAttack; } }
  });
  
  function declareWinner(fighter1, fighter2, firstAttacker) {
    var [a,b] = (fighter1.name === firstAttacker) ? [fighter1, fighter2] : [fighter2, fighter1];
    while(true)
    {
      a.attack(b);
      if (b.isDead) return a.name;
      b.attack(a);
      if (a.isDead) return b.name;
    }
  }

  function declareWinner(fighter1, fighter2, firstAttacker) {
    var res = Math.ceil(fighter1.health / fighter2.damagePerAttack) - 
              Math.ceil(fighter2.health / fighter1.damagePerAttack);
    return res > 0 ? fighter1.name : (res < 0? fighter2.name : firstAttacker);
  }

  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
