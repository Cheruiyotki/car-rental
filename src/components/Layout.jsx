import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, currentPath }) {
  return (
    <>
      <Header currentPath={currentPath} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
