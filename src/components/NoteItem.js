import React from 'react';
import { deleteNote } from '../api';

const NoteItem = ({ note, onEdit }) => {
  const handleDelete = async () => {
    await deleteNote(note._id);
    window.location.reload(); // Temporary reload to refresh the list after deletion
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default NoteItem;
