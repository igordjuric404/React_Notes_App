import { useState, useEffect, useCallback } from "react";
import ListNotes from "../../components/notes/ListNotes";
import axios from "axios";
import Swal from "sweetalert2";
import { isEmpty } from "../../services/Validation";
import { v4 as uuidv4 } from "uuid";
import "../../styles/main.scss";

export default function CreateNotes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showListNotes, setShowListNotes] = useState(false); // State to track whether to show the list of notes

  // Fetches posts from the "jsonplaceholder" API when the component mounts or when "showListNotes" becomes true
  useEffect(() => {
    const getPosts = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          const fetchedPosts = response.data;
          setNotes((prevNotes) => [...prevNotes, ...fetchedPosts]);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    };

    if (showListNotes && notes.length === 0) {
      getPosts();
    }
  }, [showListNotes, notes]);

  // Function to create a new note and add it to the "notes" state
  const createNote = () => {
    if (isEmpty(title)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title cannot be empty",
      });
      return;
    }

    if (isEmpty(body)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Content cannot be empty",
      });
      return;
    }

    const newNote = {
      id: uuidv4(), // Generates a unique ID for the new note using "uuidv4" package
      title: title,
      body: body,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]); // Adds the new note to the "notes" state
  };

  // Callback function to set "showListNotes" state to true
  const renderListNotes = useCallback(() => {
    setShowListNotes(true);
  }, []);

  // JSX code for the component
  return (
    <>
      {/* Note creation form */}
      <div className="create-wrapper">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note title"
        />
        <input
          onChange={(e) => setBody(e.target.value)}
          placeholder="Note content"
        />
        <button onClick={createNote}>Create note</button>
        {!notes.length && (
          <button onClick={renderListNotes}>Create random posts</button>
        )}
      </div>

      {/* Note count */}
      <h3 className="note-count">
        {notes.length === 1 ? `${notes.length} note` : `${notes.length} notes`}
      </h3>

      {/* Render the list of notes if there are notes */}
      {notes.length !== 0 && (
        <ListNotes
          notes={notes.slice().reverse()} // Passes the notes in reverse order to display the most recent first
          setNotes={setNotes}
          setShowListNotes={setShowListNotes}
        />
      )}
    </>
  );
}
