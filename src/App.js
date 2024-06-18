import logo from './logo.svg';
import './App.css';
import AddPrescription from './components/AddPrescription';
import AddResults from './components/AddResults';
import  SearchPrescription  from './components/SearchPrescription';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
     <Route path='/' element={<AddPrescription/>}/>
     <Route path='/AddResults' element={<AddResults/>}/>
     <Route path='/SearchPrescription' element={<SearchPrescription/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
