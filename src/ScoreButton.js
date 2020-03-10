import React from "react";
import "./App.css";

const ScoreButton = props => {
  const { team, type, setScore } = props;
  const goalName = type => {
    if (type === "fieldGoal") {
      return "Field Goal";
    } else {
      return "Touchdown";
    }
  };
  return (
    <button className={`homeButtons__${type.toLowerCase()}`} onClick={setScore}>
      {team} {goalName(type)}
    </button>
  );
};

export default ScoreButton;
