import React, { useState, useEffect } from 'react';
import { createNote, updateNote } from '../api';

const NoteForm = ({ currentNote, clearCurrent }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      await updateNote(currentNote._id, { title, content });
    } else {
      await createNote({ title, content });
    }
    clearCurrent();  // Reset the form after submission
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">{currentNote ? 'Update Note' : 'Add Note'}</button>
      {currentNote && <button onClick={clearCurrent}>Cancel</button>}
    </form>
  );
};

export default NoteForm;
