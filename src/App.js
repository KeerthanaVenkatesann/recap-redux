import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Crud from './Components/Redux/Crud';
import Counter from './Components/Redux/Counter';
import Form from './Components/Crudoperation/Form';
import Table from './Components/Crudoperation/Table';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Layout/>}></Route>
    <Route path='/crud'element={<Crud/>}></Route>
    <Route path='/counter'element={<Counter/>}></Route>
    <Route path='/form'element={<Form/>}></Route>
    <Route path='/table'element={<Table/>}></Route>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
