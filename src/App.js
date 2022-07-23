import logo from "./logo.svg";
import "./App.css";

import { Component, useState } from "react";

import { Typography, styled, Box } from "@mui/material";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTrans from "./components/NewTrans";
import Transaction from "./components/Transaction";

const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 36px;
  color: blue;
  text-transform: Capitalized;
`;

const Components = styled(Box)`
display: flex;

`

function App() {
  const [transaction,setTransaction] = useState([
 {
  id: 1,
  text:'Samosa',
  amount: -15
 },
 {
  id: 2,
  text:'Salary',
  amount: 400000
 },
 {
  id: 3,
  text:'bike',
  amount: -9
 },
 {
  id: 4,
  text:'bonus',
  amount: 100000
 },
  ])
  return (
    <Box className="App">
      <Header> Expense Tracker</Header>
      <Components>
        <Box>
          <Balance />
          <ExpenseCard />
          <NewTrans />
        </Box>
        <Box>
          <Transaction transaction = {transaction}/>
        </Box>
      </Components>
    </Box>
  );
}

export default App;
