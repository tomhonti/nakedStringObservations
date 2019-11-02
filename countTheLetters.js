function letterCount(text){
let textArray = Array.from(text);
let counts = {};
textArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  return counts;
}
