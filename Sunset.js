const sunsetCheck = (buildings) => {
  const westFirstBuildings = buildings.reverse();
  const objBuildings = { ...westFirstBuildings };
  const sunsetBuildings = [objBuildings[0]];
  const currentHighestLevel = westFirstBuildings[0];
  for (let i = 1; i < buildings.length; i++) {
    if (
      westFirstBuildings[i] > westFirstBuildings[i - 1] &&
      westFirstBuildings[i] > currentHighestLevel
    ) {
      sunsetBuildings.push(objBuildings[i]);
      currentHighestLevel[0] = westFirstBuildings[i];
    }
  }
  return sunsetBuildings;
};
module.exports = sunsetCheck;

console.log(sunsetCheck([12, 29, 20, 28, 20]));