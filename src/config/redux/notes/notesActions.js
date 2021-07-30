import { CLEAR_NOTES, READ_NOTES } from "./notesType"
import {db} from '../../firebase';

export const readNotes = (data) => {
  return {
    type: READ_NOTES,
    data: data
  }
}

export const clearNotes = () => {
  return {
    type: CLEAR_NOTES
  }
}

export const addData = ({title, content}) => {
  return (dispatch) => {
    db.collection('notes').add({
      title: title.value,
      date: new Date().getTime(),
      content: content.value
    }).then(res => {
      console.log('Sukses menambahkan data...');
    }).catch(err => {
      console.log(err);
    })
  }
}

export const getDataLive = () => {
  return (dispatch) => {
    db.collection("notes").onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((res) => {
        if(res.type == 'added') dispatch(readNotes(res.doc.data()));
      })
    });
  }
}