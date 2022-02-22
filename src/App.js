import { Routes } from "./navigation/Routes";
import axios from "axios";
import { Host } from "./utils/utils";
axios.defaults.baseURL = Host;

function App() {
  return <Routes />;
}

export default App;
