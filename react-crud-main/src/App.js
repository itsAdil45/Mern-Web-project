import './App.css';
import  Menu from './components/recipies/Menu'
import  Navbar from './components/recipies/Navbar'
import ItemDetails from './components/recipies/ItemDetails'
import Register from './components/recipies/Register'
import RecipiesForm from './components/recipies/RecipiesForm'
import {  BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
 <Navbar/>
        <Routes>
          <Route path="/recipies/details/:id" element={<ItemDetails />} />
          <Route path="/recipies/edit/:id" element={<RecipiesForm />} />
          <Route path="/" element={< Menu />} />
          <Route path="/recipies/create" element={<RecipiesForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
