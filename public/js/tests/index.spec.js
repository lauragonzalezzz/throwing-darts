describe('Score Throws', function(){

  it('should exist', function(){
    expect(scoreThrows).to.be.a('function');
  });

  it('should return a number', function(){
    expect(scoreThrows()).to.be.a('number');
  });
});