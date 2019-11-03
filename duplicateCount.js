function duplicateCount(text){
let textArray = Array.from(text.toUpperCase());
let counts = {};
textArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
let values = Object.values(counts)
let duplicates = 0;
for(let keys in values){
    if(values[keys] > 1) duplicates++;
  }; 
  return duplicates;
}
