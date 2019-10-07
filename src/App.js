//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import ScoreButton from "./ScoreButton";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(32);
  const [awayScore, setAwayScore] = useState(32);

  const homeScored = type =>
    type === "Touchdown"
      ? setHomeScore(homeScore + 7)
      : setHomeScore(homeScore + 3);
  const awayScored = type =>
    type === "Touchdown"
      ? setAwayScore(awayScore + 7)
      : setAwayScore(awayScore + 3);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <ScoreButton
            team={"Home"}
            type={"Touchdown"}
            setScore={() => homeScored("Touchdown")}
          />
          <ScoreButton
            team={"Home"}
            type={"fieldGoal"}
            setScore={() => homeScored("fieldGoal")}
          />
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        </div>
        <div className="awayButtons">
          <ScoreButton
            team={"Away"}
            type={"Touchdown"}
            setScore={() => awayScored("Touchdown")}
          />
          <ScoreButton
            team={"Away"}
            type={"fieldGoal"}
            setScore={() => awayScored("fieldGoal")}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
