import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, getDataLive, updateData } from '../../../config/redux/notes/notesActions';
import './dashboard.scss';

function Dashboard(){
  const [state, setState] = useState({id: '', title: '', content: '', textButton: 'SIMPAN'});
  const data = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const onInputChange = (e, type) => {
    setState(state => ({
      ...state,
      [type]: e.target.value
    }))
  }

  const handleSavedNotes = (e) => {
    e.preventDefault();
    if(state.textButton === 'SIMPAN') dispatch(addData(state.title, state.content)); 
    else dispatch(updateData(state)); 
  }

  const updateNotes = (notes) => {
    setState({
      id: notes.id,
      title: notes.data().title,
      content: notes.data().content,
      textButton: 'UPDATE'
    })
  }

  const cancelUpdate = () => {
    setState({
      title: '',
      content: '',
      textButton: 'SIMPAN'
    })
  }

  useEffect(() => {
    dispatch(getDataLive());
  }, [])

  return(
    <>
      <div className='container'>
        <div className='input-form'>
          <form onSubmit={handleSavedNotes}>
            <input type="text" placeholder='title' className='input-title' value={state.title} onChange={(e) => onInputChange(e, 'title')}/><br/>
            <textarea placeholder='content' className='input-content' value={state.content} onChange={(e) => onInputChange(e, 'content')}></textarea><br/>
            <div className='action-wrapper'>
              {state.textButton === 'UPDATE' && <button className='save-btn cancel' onClick={() => cancelUpdate()}>CANCEL</button>}
              <button className='save-btn' >{state.textButton}</button>
            </div>
          </form>
        </div>
        {data.length > 0 && data.map((item,index) => (
          <div className="card-content" key={index} onClick={() => updateNotes(item)}>
            <p className="title">{item.data().title}</p>
            <div className="date">{item.data().date}</div>
            <div className="content">{item.data().content}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dashboard;