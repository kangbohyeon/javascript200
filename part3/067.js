const sentences = [
  "   ABC abc",
  "ABC abc     ",
  `   first 
sencond third
        forth
    sentence
        
`,
];
const filterSentence = (sentences) => {
  const filtered = [];
  sentences.forEach((s) => {
    filtered.push(s.trim());
  });
  return filtered;
};

console.log(filterSentence(sentences));
