import "./App.css";
import Table from "./Components/Table";
import data from "./data.json";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(data));
  }, []);
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
