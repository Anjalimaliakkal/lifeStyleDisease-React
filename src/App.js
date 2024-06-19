import logo from './logo.svg';
import './App.css';
import AddPrescription from './components/AddPrescription';
import { ViewPrescription } from './components/ViewPrescription';
import AddResults from './components/AddResults';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  return (
    <div>
      <AddPrescription/>
      <ViewPrescription/>
      <AddResults/>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;
