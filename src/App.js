import {useState,useEffect} from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rote from "./Rote";
import Links from "./Links.js"
function App() {
  const [gitdata,setgitdata]=useState([1,2,3])
  const [click,setclick]=useState({})
  const fetching=()=>{
    fetch("https://api.github.com/repos/facebookincubator/create-react-app/issues")
    .then(response=>response.json())
    .then(data=>setgitdata(data))
  }
  useEffect(() => {
    fetching();
  },[]);
  console.log(gitdata);
  return (
    
    <Router>
      <div className="App">
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/Rote" exact>
           <Rote item={click}/>
          </Route>
          <Route path="/" exact>
           <Links setclick={setclick} gitdata={gitdata} />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
