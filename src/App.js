import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [choreList, setChoreList] = useState([]);
  const [choreInput, setChoreInput] = useState("");

  return (
    <>
      <div className="App"> To Do List</div>
      <div id="description"> add chores</div>
      <input id="inputbox" type= "text" placeholder='add chores here'
            onChange={(event) => {
              const typedLetter = event.target.value;
              setChoreInput(typedLetter)
            }}
      >
  
      </input>
      <div>
        {choreList.map((chore) => <div>{chore}</div>)}
      </div>
      <button id='clickbutton' onClick={() => {
        setChoreList([...choreList, choreInput])

      }
    }> Clicke Here</button>
    </>
  );
}

export default App;
