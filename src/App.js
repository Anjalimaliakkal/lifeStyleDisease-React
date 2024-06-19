import logo from './logo.svg';
import './App.css';
import AddPrescription from './components/AddPrescription';
import { ViewPrescription } from './components/ViewPrescription';
import AddResults from './components/AddResults';
import DoctorSignup from './components/DoctorSignup';


function App() {
  return (
    <div>
      <AddPrescription/>
      <ViewPrescription/>
      <AddResults/>
      <DoctorSignup/>
  
    </div>
  );
}

export default App;
