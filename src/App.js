import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Category from "./Category";

function App() {
  return (
    <div>
      <Nav />

      <main className="container">
        <h1 className="text-center mb-5">Shop by product</h1>
        <div className="row">
          <Category />
        </div>
      </main>

      <Footer />
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="py-3 border-bottom mb-5">
      <div className="container d-flex justify-content-between">
        <span>
          <a href="#" className="no-decoration logo color-red fs-4">
            Decoh
          </a>
        </span>
        <span>
          <a href="#" className="no-decoration">
            Basket
          </a>
        </span>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="mt-5 py-4 bg-light border-top text-muted">
      <div className="container">
        <span className="me-2 logo"></span>
        <span>Decoh &copy; 2021. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default App;
