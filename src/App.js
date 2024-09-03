import React from "react";
import './App.css';

function App() {
  const name ="Lio";
  return (
    <div className="app" >
    <div>
      <h1>Hi, I'm {name}</h1>
    </div>
    <div className="flex">
      <aside  className="circular-frame" >
        <img src="https://media.gettyimages.com/id/2150463586/photo/manchester-england-bruno-fernandes-of-manchester-united-looks-on-during-the-premier-league.jpg?s=612x612&w=0&k=20&c=1-KslnIRxPfzTG0_ErBiIcCFXTjgvPyUhd4YE7n0Ovs=" alt="my profile "/>
      </aside>
      <main className="mainmenu">
        <h2>About Me</h2>
        <p>----------------------------------------<br></br>--------------------------------<br>
        </br>----------------------------------<br></br>-----------------------------</p>
        <div>
        <button href="https://github.com/lio-web/bb">GitHub</button>
        <button href="https://linkedin.com/in/myusername">LinkedIn</button>
        </div>
      </main>
    </div>
    </div>
  );
}

export default App;
