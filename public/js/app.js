function scoreThrows(arr){
  var bonusCalcArray = arr.map(function(scores){
    if (scores > 10){
      scores = 0;
    }
    else if (scores <= 10 && scores >= 5){
      scores = 5;
    }
    else {
      scores = 10;
    };
    return scores;
  });

  var totalScore = bonusCalcArray.reduce(function(prev, current){
    return prev + current;
  }, 0);

  if (totalScore > 0 && totalScore === arr.length * 10){
    totalScore = totalScore + 100;
  };

  return totalScore;

}; //End of scoreThrows