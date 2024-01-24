import TeamScore from './score/TeamScore';
import OpenCTN from './modals/OpenCTN';

export default function Interface({ team1Name, team2Name, setTeam1Name, setTeam2Name }) {
    return (
        <>
            <div className='appTitleContent'>
                <h1 className='appTitle'>Marcador de Tento</h1>
            </div>
            <TeamScore
                team1Name={team1Name}
                team2Name={team2Name}
                setTeam1Name={setTeam1Name}
                setTeam2Name={setTeam2Name}
            />
            <OpenCTN setTeam1Name={setTeam1Name} setTeam2Name={setTeam2Name} />
        </>
    );
}
