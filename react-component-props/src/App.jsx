import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="col-md-7 mx-auto">
          <div className="card shadow">
            <div className="card-body p-3">
              <Header title="Simple Counter 🕺" />
              <Counter />
            </div>
          </div>
        </div>
      </div>
      <Footer copyright="&copy; ALL RIGHTS RESERVED" />
    </>
  );
}

export default App;
