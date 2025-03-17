import Router from "./router"
import AppProvider from "./provider.jsx";

function App() {
  return (
    <AppProvider>
        <Router />
    </AppProvider>
  )
}

export default App;
