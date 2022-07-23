import { Button, Typography, Box, styled, TextField } from "@mui/material";

import React from "react";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5, & > div, & > button{
    margin-top: 30px
  }
`;

const NewTrans = () => {
  return (
    <Container>
      <Typography variant="h5">New Transaction</Typography>
      <TextField label="Enter expense" />
      <TextField label="Enter amount" />
      <Button variant="contained">Add Transaction</Button>
    </Container>
  );
};

export default NewTrans;
