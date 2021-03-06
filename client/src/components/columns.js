import { format } from "date-fns"

export const COLUMNS = [
  {
    Header: "Datum",
    Footer: "Datum",
    accessor: "datum1",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy")
    }
  },
  { Header: "Id", Footer: "Id", accessor: "id" },
  {
    Header: "Name",
    Footer: "Name",
    accessor: "name"
  },
  {
    Header: "Game",
    Footer: "Game",
    accessor: "game"
  },
  {
    Header: "Soll",
    Footer: "Soll",
    accessor: "soll_1"
  },
  {
    Header: "Ist",
    Footer: "Ist",
    accessor: "ist_1"
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: "Datum",
    Footer: "Datum",
    accessor: "datum1"
  },
  { Header: "Id", Footer: "Id", accessor: "id" },
  {
    Header: "Player",
    Footer: "Player",
    columns: [
      {
        Header: "Name",
        Footer: "Name",
        accessor: "name"
      },
      {
        Header: "Game",
        Footer: "Game",
        accessor: "game"
      }
    ]
  },
  {
    Header: "Score",
    Footer: "Score",
    columns: [
      {
        Header: "Soll",
        Footer: "Soll",
        accessor: "soll_1"
      },
      {
        Header: "Ist",
        Footer: "Ist",
        accessor: "ist_1"
      }
    ]
  }
]

//   "id": 2,
//   "name": "Kyrie Irving",
//   "team": "Brooklyn Nets",
//   "soll_1": 1,
//   "ist_1": 1,
//   "datum1": "260221"
