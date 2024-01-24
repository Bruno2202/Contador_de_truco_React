import styles from './ChangeTeamName.module.css'
import { useRef } from "react";
import '../../index.css'

function ChangeTeamName({ isOpen, setModalOpen, setTeam1Name, setTeam2Name, setWin }) {

    function validateTeam1Name(e) {
        e.target.value ? setTeam1Name(e.target.value) : setTeam1Name("Nós");
    }

    function validateTeam2Name(e) {
        e.target.value ? setTeam2Name(e.target.value) : setTeam2Name("Eles");
    }

    const modalRef = useRef()

    function fadeout() {
        modalRef.current.classList.add('opacityFadeOut');
        setTimeout(() => {
            setModalOpen(true);
            setWin && setWin(false);
        }, 200);
    }

    return isOpen && (
        <div className="modalOverlay" ref={modalRef}>
            <div className={styles.changeTeamModal}>
                <h1 className={styles.changeTeamModal_title}>Informe as equipes</h1>
                <div className={styles.changeTeamModal_inputs}>
                    <input maxLength="44" className={styles.teamInput} type="text" placeholder="Equipe 1" onChange={validateTeam1Name} />
                    <input maxLength="44" className={styles.teamInput} type="text" placeholder="Equipe 2" onChange={validateTeam2Name} />
                </div>
                <button className={styles.saveAndClose} onClick={fadeout}>Salvar e fechar</button>
            </div>
        </div >
    );
}
export default ChangeTeamName;