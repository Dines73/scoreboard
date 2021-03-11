import React from "react"
import "./App.css"
// import { FilteringTable } from "./components/FilteringTable"
// import { SortingTable } from "./components/SortingTable"
// import { BasicTable } from "./components/BasicTable"
// import { PaginationTable } from "./components/PaginationTable"
// import { RowSelection } from "./components/RowSelection"
// import { ColumnOrder } from "./components/ColumnOrder"
// import { ColumnHiding } from "./components/ColumnHiding"
import { StickyTable } from "./components/StickyTable"

// function App() {
//   return (
//     <div className="App">
//       <RowSelection />
//     </div>
//   )
// }
function App() {
  return (
    <div>
      <StickyTable />
    </div>
  )
}

export default App
