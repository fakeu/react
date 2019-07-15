import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ErrorBoundary from "./error/ErrorBoundary";
import Chat from "./container/Chat/Chat";

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <Provider store={store}>
          <Chat />
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
