import logo from './logo.svg';
import './App.css';
import AddPrescription from './components/AddPrescription';
import AddResults from './components/AddResults';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchprescription from './components/Searchprescription';
import SignIndoctor from './components/SignIndoctor';
import SignUpdoctor from './components/SignUpdoctor';
import DashboardDoctor from './components/DashboardDoctor';
import SearchResult from './components/SearchResult';
import AddFeedback from './components/AddFeedback';
import ViewFeedback from './components/ViewFeedback';
import SignUpPatient from './components/SignUpPatient';
import SignInPatient from './components/SignInPatient';
import DashboardPatient from './components/DashboardPatient';
import SearchprescriptionPatient from './components/SearchprescriptionPatient';
import ViewPatient from './components/ViewPatient';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<SignIndoctor />} />
          <Route path='/AddPrescription' element={<AddPrescription />} />
          <Route path='/Searchprescription' element={<Searchprescription />} />
          <Route path='/AddResults' element={<AddResults />} />
          <Route path='/SignUpdoctor' element={<SignUpdoctor />} />
          <Route path='/DashboardDoctor' element={<DashboardDoctor />} />
          <Route path='/SearchResult' element={<SearchResult />} />
          <Route path='/AddFeedback' element={<AddFeedback />} />
          <Route path='/ViewFeedback' element={<ViewFeedback />} />
          <Route path='/SignUpPatient' element={<SignUpPatient />} />
          <Route path='/SignInPatient' element={<SignInPatient />} />
          <Route path='/DashboardPatient' element={<DashboardPatient />} />
          <Route path='/SearchprescriptionPatient' element={<SearchprescriptionPatient />} />
          <Route path='/ViewPatient' element={<ViewPatient />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
