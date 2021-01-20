import React from "react";
import ReactDOM from "react-dom";

let posts = [
  { id: "1", title: "As novidades do React 16" },
  { id: "2", title: "ContextAPI e Redux: qual o melhor?" },
  { id: "3", title: "As melhores APIs gratuitas para treinar" },
  { id: "4", title: "Como integrar o Git no VS Code" },
  { id: "5", title: "React 2021" }
];

function App() {
  if (posts.length === 0) return <h1>Você tem 0 postagens!</h1>;

  return <h1>Você tem {posts.length} postagens!</h1>;
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
