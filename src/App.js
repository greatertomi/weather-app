import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";

import "./app.scss";
import Weathers from "./components/Weathers";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Welcome to Weather App</h1>
        <div className="hideSm ml-1">
          <FcApproval size={30} />
        </div>
      </div>
      <div className="navArrow">
        <BsArrowLeft size={40} />
        <BsArrowRight size={40} />
      </div>
      <Weathers />
    </div>
  );
};

export default App;
