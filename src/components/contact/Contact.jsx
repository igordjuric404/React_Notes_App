import { useState } from "react";
import Swal from "sweetalert2";
import ContactForm from "./ContactForm";
import ContactSuccess from "./ContactSuccess";
import "./styles.scss";

export default function Contact() {
  // State for storing responses
  const [responses, setResponses] = useState([]);
  // State for form data (name, email, question)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  // State to track if the form has been submitted successfully
  const [submitted, setSubmitted] = useState(false);

  // Function to check if the input value is empty or contains only whitespace
  const isInputEmpty = (value) => value.trim() === "";

  // Function to check if the email is in a valid format using a regular expression
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Function to handle changes in form inputs and update the state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to validate the form data and return an array of errors, if any
  const validateForm = () => {
    const errors = [];
    const { name, email, question } = formData;

    // Check if any of the input fields are empty
    if (isInputEmpty(name) || isInputEmpty(email) || isInputEmpty(question)) {
      errors.push("All inputs must be filled");
    }

    // Check if the email is in a valid format
    if (!isValidEmail(email)) {
      errors.push("Please enter a valid email address");
    }

    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data and get any errors
    const errors = validateForm();

    // If there are errors, display them using SweetAlert2
    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errors.join("\n"),
      });
      return;
    }

    // If the form data is valid, create a new response object with an ID
    const id = responses.length + 1;
    const newResponse = {
      id: id,
      name: formData.name,
      email: formData.email,
      question: formData.question,
    };

    // Update the responses state with the new response and set the submitted flag to true
    setResponses([...responses, newResponse]);
    setSubmitted(true);
  };

  // The component's UI is defined based on the submitted state
  return (
    <div className="contact-container">
      {submitted ? (
        // If the form has been submitted, show the ContactSuccess component with the form data
        <ContactSuccess formData={formData} />
      ) : (
        // If the form hasn't been submitted, show the ContactForm component with relevant props
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
