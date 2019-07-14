import React from "react";
import ErrorBoundary from "./error/ErrorBoundary";
import Chat from "./Chat";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <Chat />
      </ErrorBoundary>
    </div>
  );
}

export default App;
