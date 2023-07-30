import Layout from "../components/layout/Layout";
import Contact from "../components/contact/Contact";
import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <Layout
      headerTitle="Contact"
      headerButton={
        <Link to="/">
          <button className="home-button">Back to Home</button>
        </Link>
      }
    >
      <Contact />
    </Layout>
  );
}
