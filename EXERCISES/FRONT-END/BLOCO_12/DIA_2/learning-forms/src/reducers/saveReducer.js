const INITIAL_STATE = {
  feedback: '',
  favoriteColor: '',
  isVegan: false,
  formularioComErros: false,
}

function saveReducer(state = INITIAL_STATE, action) {
  if(action.type === 'SAVE_VALUES') {
    return {
      feedback: action.feedback,
      favoriteColor: action.favoriteColor,
      isVegan: action.isVegan,
      formularioComErros: action.formularioComErros,
    }
  }
  return state;
}

export default saveReducer;
