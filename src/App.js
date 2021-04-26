import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { categories } from "./categories";
import Category from "./Category";

function App() {
  return (
    <div>
      <Nav />

      <header className="bg-light mb-5"></header>

      <main className="container">
        <h1 className="text-center mb-5">Shop by product</h1>
        <div className="row">
          {categories.map((category, index) => {
            return <Category key={category.id} {...category}></Category>;
          })}
        </div>
      </main>

      <div className="container py-5 text-center mt-5">
        <section className="row">
          <div className="col-lg-3">
            <h5>Everything for your home</h5>
            <p className="text-muted">Quality products you can count on.</p>
          </div>
          <div className="col-lg-3">
            <h5>Free delivery</h5>
            <p className="text-muted">Doorstep delivery around Kampala</p>
          </div>
          <div className="col-lg-3">
            <h5>Dedicated Customer Support</h5>
            <p className="text-muted">We’re here for you and happy to help.</p>
          </div>
          <div className="col-lg-3">
            <h5>Amazing Value Every Day</h5>
            <p className="text-muted">
              Find items you’ll love at wallet-friendly prices.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <span>
          <a href="#" className="no-decoration logo color-red fs-4">
            Decoh
          </a>
        </span>
        <span>
          <a href="#" className="no-decoration text-muted">
            shopping Basket
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
