import './App.css';
import Profil from './Profil.js';


function App() {

  
  return (
    <div className="App">
      <Profil prenom="Nicolas" nom="Primo" description="coach"/>
      <Profil prenom="Martin" nom="Matin" description="Chimiste"/>
      <Profil prenom="Beyonce" nom="Chanteuse" description="Canon "/>
      <Profil prenom="Ibrahim" nom="Ouassari" description=""/>
    </div>
  );
}

export default App;
