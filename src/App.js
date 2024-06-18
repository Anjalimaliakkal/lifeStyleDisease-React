import logo from './logo.svg';
import './App.css';
import AddPrescription from './components/AddPrescription';
import { ViewPrescription } from './components/ViewPrescription';
import AddResults from './components/AddResults';


function App() {
  return (
    <div>
      <AddPrescription/>
      <ViewPrescription/>
      <AddResults/>
    </div>
  );
}

export default App;
