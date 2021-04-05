import { SAVE_VALUES } from '../actions';

const INITIAL_STATE = {
  feedback: '',
  favoriteColor: '',
  isVegan: false,
  formularioComErros: false,
}

function saveReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SAVE_VALUES:
      return { 
        ...state,
        feedback: action.feedback,
      }
    default:
      return state;
  }
}

export default saveReducer;
