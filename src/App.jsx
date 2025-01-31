import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './styles/globals.css'; // Importa tu archivo CSS aquí

function App() {
  return (
    <Router>
      <Header /> {/* Navbar se muestra en todas las páginas */}
      {/* Aquí irían las Routes cuando definas las rutas */}
    </Router>
  );
}

export default App;