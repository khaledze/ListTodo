import React, { useState, useEffect } from "react";

export default function List() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Récupérer les tâches du stockage local
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(storedTodos.split(","));
    }
  }, []);

  // Ajouter une tâche
  const addTodo = () => {
    const newTodos = [...todos, input];
    setTodos(newTodos);
    localStorage.setItem("todos", newTodos.join(","));
    setInput("");
  };

  // Supprimer une tâche
  const deleteTodo = (todo) => {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
    localStorage.setItem("todos", newTodos.join(","));
  };

  return (
    <div>
      {/* Ajouter une tâche */}
      <div className="grandgroupe">
        <div className="titre"><h3>Liste des tâches</h3></div>
        <div className="groupe">
          <input
            className="input"
            placeholder="Username"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={addTodo}>
            <svg
              class="svg-icon"
              width="24"
              viewBox="0 0 24 24"
              height="24"
              fill="none"
            >
              <g
                stroke-width="2"
                stroke-linecap="round"
                stroke="#056dfa"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
                <path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
              </g>
            </svg>
            Add
          </button>
        </div>
      {/* Afficher les tâches */}
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button className="button2" onClick={() => deleteTodo(todo)}>Done</button>
        </div>
      ))}
      </div>
    </div>
  );
}
