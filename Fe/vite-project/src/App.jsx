import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Layout/Layout";
import Add from "./Pages/Add";
import Admin from './Pages/Admin'
import Basket from './Pages/Basket'
import Detail from "./Pages/Detail";
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Mainprovider5 from "./context/Mainprovider5";

function App() {
  

  return (
    <>
    <Mainprovider5>
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="add" element={<Add />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </Mainprovider5>
    </>
  )
}

export default App
