// Dado un texto confirmar que las palabras empiezan solamente con A E P D S.
// El texto debe tener 56 palabras
// Controlar la cantidad de palabras, imprimir las palabras a arreglar y si cumple con todo, aprobado.

const text = 'AME Esto siempre'
const condition = ['A', 'E', 'P', 'D', 'S']


function wordsStartWith(text) {
  const textToLowerCase = text.toLowerCase();
  const textToArray = textToLowerCase.split(' ');
  const wordsToFix = [];

  const conditionToLowerCase = condition.map(letter => {
    return letter.toLowerCase();
  });

  textToArray.forEach((word) => {
    const wordFirstLetter = word.charAt(0);
    if (!conditionToLowerCase.includes(wordFirstLetter)) {
      wordsToFix.push(word);
    }
  })

  if (wordsToFix.length > 0) {
    console.log('The following words do not comply with the request', wordsToFix);
  }

  if (wordsToFix.length === 0 && textToArray.length + 1 != 56) {
    console.log(`Your text is not long enough. You still need ${56 - textToArray.length} words to meet the requirements.`)
  }

  if (wordsToFix.length === 0 && textToArray.length + 1 === 56) {
    console.log(`Your text is approved.`)
  }
}

wordsStartWith(text);
