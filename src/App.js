import logo from './logo.svg';
import './App.css';
import AddPrescription from './components/AddPrescription';
import { ViewPrescription } from './components/ViewPrescription';
import AddResults from './components/AddResults';
import SignIn from './components/SignIn';


function App() {
  return (
    <div>
      <AddPrescription/>
      <ViewPrescription/>
      <AddResults/>
      <SignIn/>
    </div>
  );
}

export default App;
