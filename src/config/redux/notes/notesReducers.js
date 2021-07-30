import { CLEAR_NOTES, READ_NOTES } from "./notesType";

const initialState = [];

export function notesReducer(state=initialState, action){
  switch(action.type){
    case READ_NOTES:
        return [...state, action.data];
    case CLEAR_NOTES: 
      return state = []
    default : return state
  }
}