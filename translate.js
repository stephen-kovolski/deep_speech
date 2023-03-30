const DeepL = require('deepl');
const module = require('./main.js');
const { texts, sourceLang, targetLang } = require('./main.js');


DeepL.setApiKey('dedd54fd-7ecd-a8bb-8059-5f03a7b4c8c3:fx');


DeepL.translate(texts, 'EN', 'SP')
  .then((translation) => {
    console.log(translation);
  })
  .catch((error) => {
    console.error(error);
  });
