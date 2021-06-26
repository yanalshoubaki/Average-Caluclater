import "./styles/output.css";
import "./styles/style.css";

import Calculater from "./components/Calculater";
const App = () => {
  return (
    <div className="App">
      <div className="container mx-auto">
        <Calculater />
      </div>
    </div>
  );
};

export default App;
