import logo from './logo.svg';
import './App.css';

import {Typography, styled} from '@mui/material';
import { margin } from '@mui/system';

const Header = styled(Typography) `
  margin: 10px 0;`

function App() {
  return (
    <div className="App">
     <Header> Expense Tracker</Header>
    </div>
  );
}

export default App;
