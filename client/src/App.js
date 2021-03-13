import React from "react"
import "./App.css"
import { FilteringTable } from "./components/FilteringTable"
// import { SortingTable } from "./components/SortingTable"
import { BasicTable } from "./components/BasicTable"
// import { PaginationTable } from "./components/PaginationTable"
import { RowSelection } from "./components/RowSelection"
// import { ColumnOrder } from "./components/ColumnOrder"
// import { ColumnHiding } from "./components/ColumnHiding"
// import { StickyTable } from "./components/StickyTable"
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <h3>NBA Scoreboard</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Basic table</Link>
            </li>
            <li>
              <Link to="/filtering">Filtering</Link>
            </li>
            <li>
              <Link to="/selection">Selection</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={BasicTable} />
          <Route path="/filtering" component={FilteringTable} />
          <Route path="/selection" component={RowSelection} />
        </Switch>
      </div>
    </Router>
  )
}

// function App() {
//   return (
//     <div>
//       <StickyTable />
//     </div>
//   )
// }

export default App
