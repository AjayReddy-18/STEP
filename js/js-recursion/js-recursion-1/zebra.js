function __findPosOfZebraInDanger(jungle, index, zebraIndex) {
  if (index === jungle.length) {
    return zebraIndex;
  }

  
}

function findPosOfZebraInDanger(jungle) {
  __findPosOfZebraInDanger(jungle, 0, -1);
}

console.log(findPosOfZebraInDanger('L  Z    L       Z'));