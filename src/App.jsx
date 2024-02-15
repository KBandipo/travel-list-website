import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];




function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
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
  return <div className="list">{
    initialItems.map((item)=> )
  }</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>👜You have X items on your list, and you alredy packed X (X%)</em>
    </footer>
  );
}

export default App;
