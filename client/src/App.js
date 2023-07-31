import "./style.css";
import Admin from "./cms/Admin"
import Header from "./components/Header"
import { Switch, Route} from "react-router-dom"


function App() {

  return (
    <div>
      <Switch>
          <Route exact path="/admin"><Admin /></Route>
          <Route path="/">
            <Header />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
