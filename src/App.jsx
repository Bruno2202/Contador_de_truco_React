import './App.css';
import './styles/mobile.css';
import { useState } from 'react';
import ChangeTeamName from './components/modals/ChangeTeamName';
import Interface from './components/Interface';

export default function App() {

  const [team1Name, setTeam1Name] = useState("Nós");
  const [team2Name, setTeam2Name] = useState("Eles");
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className="App">
      <Interface
        team1Name={team1Name}
        team2Name={team2Name}
        setTeam1Name={setTeam1Name}
        setTeam2Name={setTeam2Name} 
      />
      <ChangeTeamName
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        setTeam1Name={setTeam1Name}
        setTeam2Name={setTeam2Name}
      />
    </div>
  );
}