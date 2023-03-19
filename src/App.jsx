//CSS
import "./App.css";

//React
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //game states

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetter] = useState([]);

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return { word, category };
  };

  //starts the game
  const startGame = () => {
    //pick word and category
    const { word, category } = pickWordAndCategory();

    //create array of letter
    let wordSplitters = word.split("");
    wordSplitters = wordSplitters.map((l) => l.toLowerCase());

    console.log(wordSplitters);

    //fill satates
    setPickedCategory(category);
    setPickedWord(word);
    setLetter(wordSplitters);

    setGameStage(stages[1].name);
  };
  // process the letter input
  const verfyLetter = () => {
    setGameStage(stages[2].name);
  };

  // Retry the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verfyLetter={verfyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
