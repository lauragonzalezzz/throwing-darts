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
    console.log('scores',scores);
    return scores;
  });

  var totalScore = bonusCalcArray.reduce(function(prev, current){
    return prev + current;
  }, 0);

  if (totalScore === arr.length * 10){
    totalScore = totalScore + 100;
  };

  console.log('totalScore',totalScore);
  return totalScore;

}; //End of scoreThrows

scoreThrows([3,4,2,1]);