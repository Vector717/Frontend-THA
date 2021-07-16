import REACT from "react";
import ReactDom from "react-dom";
import MemeCard from "./Day 16/MemeCard";
import Chess from "./Day 16/Chess";
import Calorimeter from "./Day 17/Calorimeter";
import {
    BrowserRouter as Router, Switch, Route, Link
}
    from "react-router-dom"

function App() {
    return (<Router>
      
        <Switch>
            <Route exact path = "/">
            <div>
        <li>
            <Link to = "/chess">
            Chess</Link>
        </li>
        <li>
            <Link to = "/memecard">
                MemeCard
            </Link>
        </li>  
        <li>
            <Link to = "/calorimeter">
            Calorimeter</Link>
        </li> 
       
           
        </div>
            </Route>
            <Route path="/chess">
                <Chess />
            </Route>
            <Route path="/memecard">
                <MemeCard />
            </Route>
            <Route path="/calorimeter">
                <Calorimeter />
            </Route>
        </Switch>
    </Router>)
}
export default App



