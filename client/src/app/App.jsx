import Router from "./router"
import AppProvider from "./provider.jsx";

function App() {
  return (
    <AppProvider>
      <div className="main-container">
        <Router />
      </div>
    </AppProvider>
  )
}

export default App;
