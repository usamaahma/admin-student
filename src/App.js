import "./App.css";
import Navbar1 from "./screens/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Admission from "./components/admission/Admission";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Admission />
    </div>
  );
}

export default App;
