import React, { useEffect, useState } from 'react';
import { fetchNotes } from '../api';
import NoteItem from './NoteItem';

const NoteList = ({ onEdit }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const { data } = await fetchNotes();
      setNotes(data);
    };
    getNotes();
  }, []);

  return (
    <div>
      <h2>All Notes</h2>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default NoteList;
