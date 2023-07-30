import Header from "./Header";
import Footer from "./Footer";
import "./styles.scss";

export default function Layout({ headerTitle, headerButton, children }) {
  return (
    <div className="app-wrapper">
      <Header headerTitle={headerTitle} headerButton={headerButton} />
      <div className="app">{children}</div>
      <Footer />
    </div>
  );
}
