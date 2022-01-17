function canTakeArtPieces(pieces) {
  
  return pieces.every((pieces) => pieces.type === "painting");
}

  
   
  


// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
