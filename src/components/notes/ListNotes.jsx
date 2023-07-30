import React from "react";
import Note from "./Note";
import "./styles.scss";

export default function ListNotes({ notes, setNotes, setShowListNotes }) {
  return (
    <div className="main">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            setNotes={setNotes}
            setShowListNotes={setShowListNotes}
          />
        );
      })}
    </div>
  );
}
