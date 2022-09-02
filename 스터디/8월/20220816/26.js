planet = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

tmp = "수성";
if (tmp in planet) {
  console.log(planet[tmp]);
}

const getStarEnglishName = (planet) => {
  const planets = {
    수성: "Mercury",
    금성: "Venus",
    지구: "Earth",
    화성: "Mars",
    목성: "Jupiter",
    토성: "Saturn",
    천왕성: "Uranus",
    해왕성: "Neptune",
  };
  return planets[planet];
};

const planet = propmpt();
console.log(getStarEnglishName(planet));
