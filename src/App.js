import logo from './logo.svg';
import './App.css';
import Voyage from "./assets/Voyage_Foto1.jpeg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <div>
        <img src="/logotipoVW.png" alt="Logotipo Volkswagen" />
      </div>
      <div>
        <img src={Voyage} alt="Foto VOyage" />
      </div>
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
