import React from "react";
import Generator from "./components/Generator";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const [link, setLink] = React.useState("");

  return (
    <div>
      <ToastContainer />
      <div className="container center">
        <main>
          <Header />
          <Generator link={link} setLink={setLink} />
        </main>
      </div>
    </div>
  );
};

export default App;
