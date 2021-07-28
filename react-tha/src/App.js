import REACT from "react";
import ReactDom from "react-dom";
import MemeCard from "./Day 16/MemeCard";
import Chess from "./Day 16/Chess";
import Calorimeter from "./Day 17/Calorimeter";
import Chessboard from "./Day 18/Chessboard";
import Counter from "./Day 19/App";

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
        <li>
            <Link to = "./chessboard">
                Chessboard
            </Link>
        </li>
        <li>
            <Link to = "./counter">
                Counter
            </Link>
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
            <Route path="/chessboard">
                <Chessboard />
            </Route>
            <Route path="/counter">
                <Counter />
            </Route>
           
        </Switch>
    </Router>)
}
export default App



