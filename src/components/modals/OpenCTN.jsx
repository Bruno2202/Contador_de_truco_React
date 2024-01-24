import React, { useState } from "react";
import ChangeTeamName from "./ChangeTeamName";

export default function OpenCTN({ setTeam1Name, setTeam2Name }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="changeTeams">
      <button className="btnDefault" onClick={() => setOpenModal(true)}>Equipe</button>
      <ChangeTeamName isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} setTeam1Name={setTeam1Name} setTeam2Name={setTeam2Name} />
    </div>
  );
}
