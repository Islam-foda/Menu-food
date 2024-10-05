import { useState } from "react";
import data from "./data";
import "./App.css";
import Menu from "./Menu";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
function App() {
  let [menu, setMenu] = useState(data);
  let [categories, setCategories] = useState(allCategories);

  //apply Filter
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const setMenuItem = data.filter((item) => item.category === category);
    setMenu(setMenuItem);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
