describe('Score Throws', function(){

  it('should exist', function(){
    expect(scoreThrows).to.be.a('function');
  });

  it('should return a number', function(){
    expect(scoreThrows([3,4,5])).to.be.a('number');
  });

  it('should return a score based on input array', function(){
    expect(scoreThrows([4,3,2,7])).to.equal(35);
  });

  it('should award a bonus of 100 if each radius is less than 5', function(){
    expect(scoreThrows([4,3,2,3])).to.equal(140);
  });

  it('should return a score of zero on an empty array', function(){
    expect(scoreThrows([])).to.equal(0);
  });
});