import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout/Layout";

export default function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  const getNote = useCallback(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setNote(response.data);
      })
      .catch((error) => {
        console.log(error);
        setNote(null);
      });
  }, [id]);

  useEffect(() => {
    getNote();
  }, [getNote]);

  return (
    <Layout
      headerTitle={`Note no: ${id}`}
      headerButton={
        <Link to="/">
          <button className="home-button">Back to Home</button>
        </Link>
      }
    >
      <div>
        {note ? (
          <>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </>
        ) : (
          <p>Note not found.</p>
        )}
      </div>
    </Layout>
  );
}
