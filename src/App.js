import logo from "./logo.svg";
import "./App.css";

import { Typography, styled, Box } from "@mui/material";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTrans from "./components/NewTrans";


const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 36px;
  color: blue;
  text-transform: Capitalized;
`;

function App() {
  return (
    <Box className="App">
      <Header> Expense Tracker</Header>
      <Box>
        <Box>
          <Balance/>
          <ExpenseCard/>
          <NewTrans/>
        </Box>
        <Box>

        </Box>
      </Box>
    </Box>
  );
}

export default App;
