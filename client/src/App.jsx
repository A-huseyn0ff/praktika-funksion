
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import MainLayout from './MainLayout/MainLayout';
import Detailpage from './Pages/Detailpage';
import AddPage from './Pages/AddPage';
import WishlistPage from './Pages/WishlistPage';
function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":id" element={<Detailpage />}/>
          <Route path="add" element={<AddPage />}/>
          <Route path="wish" element={<WishlistPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
