const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const loremIpsumTitleGenerator = lorem.generateSentences(1);
const loremIpsumTextGenerator = lorem.generateParagraphs(7);


module.exports = {loremIpsumTitleGenerator,loremIpsumTextGenerator};