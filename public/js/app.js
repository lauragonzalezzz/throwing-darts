function scoreThrows(arr){
  var bonusCalcArray = arr.map(function(scores){
    // console.log('scores',scores);
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



}; //End of scoreThrows

scoreThrows([3,6,8]);