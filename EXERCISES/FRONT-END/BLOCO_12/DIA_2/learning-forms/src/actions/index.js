export const SAVE_VALUES = 'SAVE_VALUES';

export function saveValues(feedback, favoriteColor, isVegan, formularioComErros) {
  return {
    type: SAVE_VALUES,
    feedback, 
    favoriteColor,
    isVegan,
    formularioComErros,
  }
}
