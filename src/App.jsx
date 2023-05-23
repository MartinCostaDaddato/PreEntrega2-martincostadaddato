import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido al proyecto de Martin Costa Daddato"} />
      <ItemCount stock={10} initial={1}/>
    </div>
  );
}

export default App;
