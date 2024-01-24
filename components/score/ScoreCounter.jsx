import WinScreen from "../modals/WinScreen";
import { useState, useEffect } from "react";

export default function ScoreCounter({
    setTeam1Name,
    setTeam2Name,
    pointsT1,
    pointsT2,
    setPointsT1,
    setPointsT2,
    teamNumber,
    trucoState,
    setTrucoState,
    trucoName,
    setTrucoName,
    setTrucoStateT1,
    setTrucoStateT2,
    setTrucoNameT1,
    setTrucoNameT2,
    resetPoints
}) {
    const [win, setWin] = useState(false);
    const [trucoValue, setTrucoValue] = useState(3);

    useEffect(() => {
        if (win) {
            setTrucoState(false)
            setTrucoStateT1 && setTrucoStateT1(false);
            setTrucoStateT2 && setTrucoStateT2(false);
            setTrucoNameT1 && setTrucoNameT1(`Truco`);
            setTrucoNameT2 && setTrucoNameT2(`Truco`);
            setTrucoValue(3);
        }
    }, [win]);

    function increment() {
        trucoState === true
            ? (() => {
                teamNumber === 1
                    ? (() => {
                        resetTruco();
                        setPointsT1(prevPointsT1 => {
                            const updatedPoints = prevPointsT1 + trucoValue;
                            setWin(false);
                            if (updatedPoints >= 12) {
                                setWin(true);
                            }
                            return updatedPoints;
                        });
                    })()
                    : (() => {
                        resetTruco();
                        setPointsT2(prevPointsT2 => {
                            const updatedPoints = prevPointsT2 + trucoValue;
                            setWin(false);
                            if (updatedPoints >= 12) {
                                setWin(true);
                            }
                            return updatedPoints;
                        });
                    })();
            })()
            : (() => {
                teamNumber === 1
                    ? (() => {
                        setPointsT1(pointsT1 + 1);
                        setWin(false);
                        if (pointsT1 + 1 >= 12) {
                            resetTruco();
                            setWin(true);
                        }
                    })()
                    : (() => {
                        setPointsT2(pointsT2 + 1);
                        setWin(false);
                        if (pointsT2 + 1 >= 12) {
                            resetTruco();
                            setWin(true);
                        }
                    })();
            })();
    }

    function decrement() {
        teamNumber === 1
            ? (() => {
                pointsT1 > 0 && setPointsT1(pointsT1 - 1)
            })() : (() => {
                pointsT2 > 0 && setPointsT2(pointsT2 - 1)
            })();
    }


    function truco() {
        teamNumber === 1
            ? (() => {
                if (trucoValue !== 12) {
                    if (trucoState) {
                        setTrucoValue(prevValue => prevValue + 3);
                        setTrucoName(`Truco (${trucoValue + 3})`);
                    } else {
                        setTrucoState(true);
                        setTrucoName(`Truco (${trucoValue})`);
                    }
                } else {
                    setTrucoState(false);
                    setTrucoValue(3);
                    setTrucoName(`Truco`);
                }
            })()
            : (() => {
                if (trucoValue !== 12) {

                    if (trucoState) {
                        setTrucoValue(prevValue => prevValue + 3);
                        setTrucoName(`Truco (${trucoValue + 3})`);
                    } else {
                        setTrucoState(true);
                        setTrucoName(`Truco (${trucoValue})`);
                    }
                } else {
                    setTrucoState(false);
                    setTrucoValue(3);
                    setTrucoName(`Truco`);
                }
            })()
    }

    function resetTruco() {
        setTrucoState(false);
        setTrucoValue(3);
        setTrucoName(`Truco`);
    }

    return (
        <div className="teamCounter">
            <div className="points">
                <h1 className="pointsCounter">{teamNumber === 1 ? pointsT1 : pointsT2}</h1>
                <div className="calcButtons">
                    <button className="btn" onClick={increment}>+</button>
                    <button className="btn" onClick={decrement}>-</button>
                    <button className="btnTruco" onClick={truco}>{teamNumber === 1 ? trucoName : trucoName}</button>
                </div>
            </div>
            {win === true &&
                <WinScreen
                    setTeam1Name={setTeam1Name}
                    setTeam2Name={setTeam2Name}
                    setWin={setWin}
                    resetPoints={resetPoints}
                />
            }
        </div>
    );
}