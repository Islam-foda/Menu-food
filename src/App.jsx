import { useState } from "react";
import data from "./data";
import "./App.css";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  let [menu, setMenu] = useState(data);
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
