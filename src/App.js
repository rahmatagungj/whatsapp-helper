import React from "react";
import Generator from "./components/Generator";
import Header from "./components/Header";

const App = () => {
  const [link, setLink] = React.useState("");

  return (
    <div className="container center">
      <main>
        <Header />
        <h2>{link}</h2>
        <Generator link={link} setLink={setLink} />
      </main>
    </div>
  );
};

export default App;
