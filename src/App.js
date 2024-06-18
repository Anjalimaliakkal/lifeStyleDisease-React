import logo from './logo.svg';
import './App.css';
import AddPrescription from './components/AddPrescription';
import { ViewPrescription } from './components/ViewPrescription';

function App() {
  return (
    <div>
      <AddPrescription/>
      <ViewPrescription/>
    </div>
  );
}

export default App;
