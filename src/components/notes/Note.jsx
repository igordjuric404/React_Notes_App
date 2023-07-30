import React from "react";
import Swal from "sweetalert2";
import Remove from "../../images/close.png";
import Settings from "../../images/settings.png";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Note({ id, title, body, setNotes, setShowListNotes }) {
  // Function to remove a note
  const removeNote = () => {
    // Display a confirmation dialog using SweetAlert2 library
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to delete this note",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Filter out the note with the given id and update the notes state
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        Swal.fire(
          "Deleted!",
          "You have successfully deleted the note",
          "success",
        );

        // If no notes left, hide the ListNotes component
        setShowListNotes(false);
      }
    });
  };

  // Function to update a note
  const updateNote = (updatedTitle, updatedBody) => {
    // Check if either title or body is empty
    if (!updatedTitle.trim() || !updatedBody.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title and Body cannot be empty.",
      });
      return;
    }

    // Find the note with the given id and update its title and body
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, title: updatedTitle, body: updatedBody };
        }
        return note;
      }),
    );

    Swal.fire("Updated!", "You have successfully updated the note", "success");
  };

  // Function to handle the edit note event
  const handleEditNote = () => {
    Swal.fire({
      title: "Edit Note",
      html: `
        <input id="swal-input-title" class="swal2-input" value="${title}">
        <input id="swal-input-body" class="swal2-input" value="${body}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        // Get the updated title and body values from the input elements
        const updatedTitle = document.getElementById("swal-input-title").value;
        const updatedBody = document.getElementById("swal-input-body").value;
        updateNote(updatedTitle, updatedBody);
      },
    });
  };

  return (
    <div className="note">
      <div className="note-wrapper" id="stripes">
        <div className="icons">
          {/* Event handler to trigger the edit note functionality */}
          <img
            onClick={() => {
              handleEditNote();
            }}
            className="update-note"
            src={Settings}
            alt=""
          />
          {/* Event handler to trigger the note removal */}
          <img
            onClick={() => {
              removeNote(id);
            }}
            className="remove-note"
            src={Remove}
            alt=""
          />
        </div>
        {/* Link to navigate to the individual note page */}
        <Link to={`/note/${id}`}>
          <h4 className="title">{title.substring(0, 40)}</h4>
          <p className="body">{body.substring(0, 200)}</p>
        </Link>
      </div>
    </div>
  );
}
