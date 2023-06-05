import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext, CartProvider } from "./Components/CartContext/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={ <ItemDetailContainer/> } />
              <Route path="/*" element={<h1 className="text-center mt-24 text-6xl">404 NOT FOUND</h1>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
