// Dado un texto confirmar que las palabras empiezan solamente con A E P D S.
// El texto debe tener 56 palabras
// Controlar la cantidad de palabras, imprimir las palabras a arreglar y si cumple con todo, aprobado.


const text = 'Pienso sobre empezar a escribir. Despacio. Parece simple pero es extraño. Escribir es desarmar pensamientos. Es encontrar algunas explicaciones. Permite distender el peso de entender algo desconocido. Primer paso: separar prejuicios propios. Segundo paso: dejar de pensar. Después: soltarse. Amerita explayarse para encontrar soluciones, para permutar, para pensarnos distintos. Permitirse discernir permanentemente para evolucionar. Pidamos ayuda.'
const condition = ['A', 'E', 'P', 'D', 'S'];
const requiredTextLength = 56;


function wordsStartWith(text) {
  const textToLowerCase = text.toLowerCase();
  const textToArray = textToLowerCase.split(' ');

  const conditionToLowerCase = condition.map(letter => {
    return letter.toLowerCase();
  });

  const wordsToFix = textToArray.filter((word) => !conditionToLowerCase.includes(word.charAt(0)))

  if (wordsToFix.length > 0) {
    console.log('The following words do not comply with the request', wordsToFix);
    return;
  }

  if (wordsToFix.length === 0 && textToArray.length < requiredTextLength) {
    console.log(`Your text is not long enough. You still need ${requiredTextLength - textToArray.length} words to meet the requirements.`)
    return false;
  } else if (wordsToFix.length === 0 && textToArray.length > requiredTextLength) {
    console.log(`Text is longer than what was requested`)
    return false;
  } else {
    console.log(`Your text is approved.`)
    return true
  }
}

wordsStartWith(text);
