import { CLEAR_NOTES, READ_NOTES } from "./notesType"
import {db} from '../../firebase';

export const readNotes = (data) => {
  return {
    type: READ_NOTES,
    data
  }
}

export const clearNotes = () => {
  return {
    type: CLEAR_NOTES
  }
}

export const addData = (title, content) => {
  return (dispatch) => {
    db.collection('notes').add({
      title,
      date: new Date().getDate(),
      content
    }).then(res => {
      console.log('Sukses menambahkan data...');
    }).catch(err => {
      console.log(err);
    })
  }
}

const getNotes = () => {      
  return (dispatch) => {
    db.collection('notes').get()  // Untuk mengambil seluruh koleksi atau data
    .then(snapshot => {
      dispatch(clearNotes());
      snapshot.docs.forEach(item => {
        dispatch(readNotes(item));
      });
    })
  }
}

export const getDataLive = () => {
  return (dispatch) => {
    dispatch(clearNotes());
    db.collection("notes").onSnapshot((querySnapshot) => { 
      querySnapshot.docChanges().forEach((res) => {   //docChanges() untuk mengambil perubahan dan mendapatkan res 1 data saja
        if(res.type === 'added' || res.type === 'modified' || res.type == 'removed') {
          dispatch(getNotes());
        }
      })
    });
  }
}

export const deleteData = (id) => {
  return () => {
    db.collection('notes').doc(id).delete()
      .then(res => {
        console.log('Data berhasil dihapus');
        console.log(res);
      })
  }
}

export const updateData = (data) => {
  return (dispatch) => {
    console.log(data)
    db.collection('notes').doc(data.id).update({
      title: data.title,
      content: data.content,
      date: new Date().getDate()
    })
  }
}