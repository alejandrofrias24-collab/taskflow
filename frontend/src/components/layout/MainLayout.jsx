import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./layout.css";

export default function MainLayout({
  children
}) {

  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <main className="content">

          {children}

        </main>

        <Footer />

      </div>

    </div>
  );
}