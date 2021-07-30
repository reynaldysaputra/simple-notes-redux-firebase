import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, getData, getDataLive } from '../../../config/redux/notes/notesActions';
import './dashboard.scss';

function Dashboard(){
  const data = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleSavedNotes = (e) => {
    e.preventDefault();
    const {title, content} = e.target.elements;
    dispatch(addData({title, content}));
  }

  useEffect(() => {
    dispatch(getDataLive());
  }, [dispatch])

  return(
    <>
      <div className='container'>
        <div className='input-form'>
          <form onSubmit={handleSavedNotes}>
            <input type="text" placeholder='title' name='title' className='input-title' /><br/>
            <textarea placeholder='content' className='input-content' name='content'></textarea><br/>
            <button className='save-btn'>Simpan</button>
          </form>
        </div>
        {data.length > 0 && data.map((item,index) => (
          <div className="card-content" key={index}>
            <p className="title">{item.title}</p>
            <div className="date">{item.date}</div>
            <div className="content">{item.content}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Dashboard;