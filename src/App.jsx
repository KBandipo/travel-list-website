import React from "react";

function App() {
  return <div className="app"></div>;
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>Needs for your trip</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list" LIST></div>;
}
function Stats() {
  return (
    <footer className="">
      <em>👜You have X items on your list, and you alredy packed X (X%)</em>
    </footer>
  );
}

export default App;
