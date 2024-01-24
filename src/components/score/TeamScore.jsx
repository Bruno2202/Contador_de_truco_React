import ScoreCounter from "./ScoreCounter";
import { useState } from "react";

export default function TeamScore({ team1Name, team2Name, setTeam1Name, setTeam2Name, }) {

    const [pointsT1, setPointsT1] = useState(0);
    const [pointsT2, setPointsT2] = useState(0);

    const [trucoStateT1, setTrucoStateT1] = useState(false);
    const [trucoStateT2, setTrucoStateT2] = useState(false);
    const [trucoNameT1, setTrucoNameT1] = useState("Truco");
    const [trucoNameT2, setTrucoNameT2] = useState("Truco");

    function resetPoints() {
        const intervalIdT1 = setInterval(() => {
            setPointsT1((prevPoints) => {
                const newPointsT1 = prevPoints - 1;

                if (newPointsT1 <= 0) {
                    clearInterval(intervalIdT1);
                    return 0;
                }

                return newPointsT1;
            });
        }, 50);

        const intervalIdT2 = setInterval(() => {
            setPointsT2((prevPoints) => {
                const newPointsT2 = prevPoints - 1;

                if (newPointsT2 <= 0) {
                    clearInterval(intervalIdT2);
                    return 0;
                }

                return newPointsT2;
            });
        }, 50);
    }

    return (
        <div className="teamCards">
            <div className="teamScore">
                <div className="teamName">
                    <h3 className="teamSurname">{team1Name}</h3>
                </div>
                <ScoreCounter
                    pointsT1={pointsT1}
                    setPointsT1={setPointsT1}
                    setTeam1Name={setTeam1Name}
                    setTeam2Name={setTeam2Name}
                    teamNumber={1}
                    resetPoints={resetPoints}

                    trucoState={trucoStateT1}
                    setTrucoState={setTrucoStateT1}
                    trucoName={trucoNameT1}
                    setTrucoName={setTrucoNameT1}

                    setTrucoStateT2={setTrucoStateT2}
                    setTrucoNameT2={setTrucoNameT2}
                />
            </div>
            <div className="teamScore">
                <div className="teamName">
                    <h3 className="teamSurname">{team2Name}</h3>
                </div>
                <ScoreCounter
                    pointsT2={pointsT2}
                    setPointsT2={setPointsT2}
                    setTeam1Name={setTeam1Name}
                    setTeam2Name={setTeam2Name}
                    teamNumber={2}
                    resetPoints={resetPoints}

                    trucoState={trucoStateT2}
                    setTrucoState={setTrucoStateT2}
                    trucoName={trucoNameT2}
                    setTrucoName={setTrucoNameT2}

                    setTrucoStateT1={setTrucoStateT1}
                    setTrucoNameT1={setTrucoNameT1}
                />
            </div>
        </div>
    );
}