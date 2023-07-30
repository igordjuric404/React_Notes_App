import Layout from "../components/layout/Layout";
import CreateNotes from "../components/notes/CreateNotes";

export default function Home() {
  return (
    <Layout headerTitle="Home">
      <CreateNotes />
    </Layout>
  );
}
