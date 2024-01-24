import { useState, useRef } from "react";
import { generateDuck } from "../../functions/generateDuck";
import ChangeTeamName from "./ChangeTeamName";
import duckQuack from "../../assets/sounds/sompato.mp3";

function playDuckSound() {
    const audio = new Audio(duckQuack)
    audio.play();
}

export default function WinScreen({ setTeam1Name, setTeam2Name, setWin, resetPoints }) {
    const theDuck = generateDuck()

    const [winScreenActive, setWinScreenActive] = useState(true);
    const [openModal, setOpenModal] = useState(false)
    const modalRef = useRef()

    function closeWinScreen() {
        modalRef.current.classList.add('opacityFadeOut');
        setTimeout(() => {
            resetPoints();
            setWinScreenActive(false);
            setWin(false);
        }, 200);
    }

    function openChageTeam() {
        modalRef.current.classList.add('opacityFadeOut');
        resetPoints();
        setWinScreenActive(false);
        setOpenModal(true);
    }

    return winScreenActive ? (
        <>
            <div className="modalOverlay" ref={modalRef}>
                <div className="winScreenModal">
                    <h1>FIM DE JOGO</h1>
                    <img className="duck" src={theDuck} alt="Pato do truco" onClick={playDuckSound} />
                    <div className="btnOptions">
                        <button className="btnDefault" onClick={openChageTeam}>
                            Trocar Esquipes
                        </button>
                        <button className="btnDefault" onClick={closeWinScreen}>
                            Nova Partida
                        </button>
                    </div>
                </div>
            </div>
        </>
    ) : openModal && (
        <>
            <ChangeTeamName
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}
                setTeam1Name={setTeam1Name}
                setTeam2Name={setTeam2Name}
                setWin={setWin}
            />
        </>
    );
}