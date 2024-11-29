
import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import { fetchTicketsAndUsers } from "./components/Api";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem("groupBy") || "status");
  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "priority");

  useEffect(() => {
    const loadTickets = async () => {
      const enrichedTickets = await fetchTicketsAndUsers();
      setTickets(enrichedTickets);
    };
    loadTickets();
  }, []);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortBy", sortBy);
  }, [groupBy, sortBy]);

  return (
    <div className="app">
     
      <KanbanBoard
        tickets={tickets}
        groupBy={groupBy}
        sortBy={sortBy}
        setGroupBy={setGroupBy}
        setSortBy={setSortBy}
      />
      

    </div>
  );
};

export default App;
